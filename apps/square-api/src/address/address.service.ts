import { Injectable } from '@nestjs/common';
import { ProvinceRepository } from './repositories/province.repository';
import { DistrictRepository } from './repositories/district.repository';
import { WardRepository } from './repositories/ward.repository';
import { AddressMapper } from './mappers/address.mapper';
import { ProvinceDTO } from './dtos/province.dto';
import { DistrictDTO } from './dtos/district.dto';
import { WardDTO } from './dtos/ward.dto';

@Injectable()
export class AddressService {
  constructor(
    private readonly provinceRepository: ProvinceRepository,
    private readonly districtRepository: DistrictRepository,
    private readonly wardRepository: WardRepository,
    private readonly addressMapper: AddressMapper
  ) {}

  async getProvincesByCountryId(countryId: number): Promise<ProvinceDTO[]> {
    const provinces = await this.provinceRepository.find({
      where: { country: { id: countryId } },
      relations: ['country'],
    });
    return this.addressMapper.toProvinceDTOList(provinces);
  }

  async getDistrictsByProvinceId(provinceId: number): Promise<DistrictDTO[]> {
    const districts = await this.districtRepository.find({
      where: { province: { id: provinceId } },
      relations: ['province'],
    });
    return this.addressMapper.toDistrictDTOList(districts);
  }

  async getWardsByDistrictId(districtId: number): Promise<WardDTO[]> {
    const wards = await this.wardRepository.find({
      where: { district: { id: districtId } },
      relations: ['district'],
    });
    return this.addressMapper.toWardDTOList(wards);
  }
}
