import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AddressService } from './address.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Province } from './entities/province.entity';
import { District } from './entities/district.entity';
import { Ward } from './entities/ward.entity';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get('countries/:countryId/provinces')
  @ApiOperation({ summary: 'Get provinces by country ID' })
  @ApiParam({ name: 'countryId', description: 'ID of the country', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'List of provinces in the country',
    type: [Province]
  })
  async getProvincesByCountryId(@Param('countryId', ParseIntPipe) countryId: number) {
    return this.addressService.getProvincesByCountryId(countryId);
  }

  @Get('provinces/:provinceId/districts')
  @ApiOperation({ summary: 'Get districts by province ID' })
  @ApiParam({ name: 'provinceId', description: 'ID of the province', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'List of districts in the province',
    type: [District]
  })
  async getDistrictsByProvinceId(@Param('provinceId', ParseIntPipe) provinceId: number) {
    return this.addressService.getDistrictsByProvinceId(provinceId);
  }

  @Get('districts/:districtId/wards')
  @ApiOperation({ summary: 'Get wards by district ID' })
  @ApiParam({ name: 'districtId', description: 'ID of the district', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'List of wards in the district',
    type: [Ward]
  })
  async getWardsByDistrictId(@Param('districtId', ParseIntPipe) districtId: number) {
    return this.addressService.getWardsByDistrictId(districtId);
  }
}
