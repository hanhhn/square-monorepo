import { Injectable } from '@nestjs/common';
import { ProvinceRepository } from './repositories/province.repository';
import { DistrictRepository } from './repositories/district.repository';
import { WardRepository } from './repositories/ward.repository';

@Injectable()
export class AddressService {
  constructor(
    private readonly provinceRepository: ProvinceRepository,
    private readonly districtRepository: DistrictRepository,
    private readonly wardRepository: WardRepository
  ) {}

  async getProvincesByCountryId(countryId: number) {
    return this.provinceRepository.find({
      where: { country: { id: countryId } },
      relations: ['country'],
    });
  }

  async getDistrictsByProvinceId(provinceId: number) {
    return this.districtRepository.find({
      where: { province: { id: provinceId } },
      relations: ['province'],
    });
  }

  async getWardsByDistrictId(districtId: number) {
    return this.wardRepository.find({
      where: { district: { id: districtId } },
      relations: ['district'],
    });
  }
}
