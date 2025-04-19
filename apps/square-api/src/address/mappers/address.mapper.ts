import { Injectable } from '@nestjs/common';
import { Country } from '../entities/country.entity';
import { Province } from '../entities/province.entity';
import { District } from '../entities/district.entity';
import { Ward } from '../entities/ward.entity';
import { CountryDTO } from '../dtos/country.dto';
import { ProvinceDTO } from '../dtos/province.dto';
import { DistrictDTO } from '../dtos/district.dto';
import { WardDTO } from '../dtos/ward.dto';

@Injectable()
export class AddressMapper {
  toCountryDTO(country: Country): CountryDTO {
    const dto = new CountryDTO();
    dto.id = country.id;
    dto.name = country.name;
    return dto;
  }

  toProvinceDTO(province: Province): ProvinceDTO {
    const dto = new ProvinceDTO();
    dto.id = province.id;
    dto.name = province.name;
    return dto;
  }

  toDistrictDTO(district: District): DistrictDTO {
    const dto = new DistrictDTO();
    dto.id = district.id;
    dto.name = district.name;
    return dto;
  }

  toWardDTO(ward: Ward): WardDTO {
    const dto = new WardDTO();
    dto.id = ward.id;
    dto.name = ward.name;
    return dto;
  }

  toProvinceDTOList(provinces: Province[]): ProvinceDTO[] {
    return provinces.map(province => this.toProvinceDTO(province));
  }

  toDistrictDTOList(districts: District[]): DistrictDTO[] {
    return districts.map(district => this.toDistrictDTO(district));
  }

  toWardDTOList(wards: Ward[]): WardDTO[] {
    return wards.map(ward => this.toWardDTO(ward));
  }
}
