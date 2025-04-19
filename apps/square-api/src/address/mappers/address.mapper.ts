import { Injectable } from '@nestjs/common';
import { Country } from '../entities/country.entity';
import { Province } from '../entities/province.entity';
import { District } from '../entities/district.entity';
import { Ward } from '../entities/ward.entity';
import { CountryDto } from '../dtos/country.dto';
import { ProvinceDto } from '../dtos/province.dto';
import { DistrictDto } from '../dtos/district.dto';
import { WardDto } from '../dtos/ward.dto';

@Injectable()
export class AddressMapper {
  toCountryDTO(country: Country): CountryDto {
    const dto = new CountryDto();
    dto.id = country.id;
    dto.name = country.name;
    return dto;
  }

  toProvinceDTO(province: Province): ProvinceDto {
    const dto = new ProvinceDto();
    dto.id = province.id;
    dto.name = province.name;
    return dto;
  }

  toDistrictDTO(district: District): DistrictDto {
    const dto = new DistrictDto();
    dto.id = district.id;
    dto.name = district.name;
    return dto;
  }

  toWardDTO(ward: Ward): WardDto {
    const dto = new WardDto();
    dto.id = ward.id;
    dto.name = ward.name;
    return dto;
  }

  toProvinceDTOList(provinces: Province[]): ProvinceDto[] {
    return provinces.map((province) => this.toProvinceDTO(province));
  }

  toDistrictDTOList(districts: District[]): DistrictDto[] {
    return districts.map((district) => this.toDistrictDTO(district));
  }

  toWardDTOList(wards: Ward[]): WardDto[] {
    return wards.map((ward) => this.toWardDTO(ward));
  }
}
