import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Province } from './entities/province.entity';
import { District } from './entities/district.entity';
import { Ward } from './entities/ward.entity';
import { CountryRepository } from './repositories/country.repository';
import { ProvinceRepository } from './repositories/province.repository';
import { DistrictRepository } from './repositories/district.repository';
import { WardRepository } from './repositories/ward.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Country, Province, District, Ward])],
  controllers: [AddressController],
  providers: [
    AddressService,
    CountryRepository,
    ProvinceRepository,
    DistrictRepository,
    WardRepository,
  ],
})
export class AddressModule {}
