import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AddressService } from './address.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProvinceDto } from './dtos/province.dto';
import { DistrictDto } from './dtos/district.dto';
import { WardDto } from './dtos/ward.dto';

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
    type: [ProvinceDto]
  })
  async getProvincesByCountryId(@Param('countryId', ParseIntPipe) countryId: number): Promise<ProvinceDto[]> {
    return this.addressService.getProvincesByCountryId(countryId);
  }

  @Get('provinces/:provinceId/districts')
  @ApiOperation({ summary: 'Get districts by province ID' })
  @ApiParam({ name: 'provinceId', description: 'ID of the province', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'List of districts in the province',
    type: [DistrictDto]
  })
  async getDistrictsByProvinceId(@Param('provinceId', ParseIntPipe) provinceId: number): Promise<DistrictDto[]> {
    return this.addressService.getDistrictsByProvinceId(provinceId);
  }

  @Get('districts/:districtId/wards')
  @ApiOperation({ summary: 'Get wards by district ID' })
  @ApiParam({ name: 'districtId', description: 'ID of the district', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'List of wards in the district',
    type: [WardDto]
  })
  async getWardsByDistrictId(@Param('districtId', ParseIntPipe) districtId: number): Promise<WardDto[]> {
    return this.addressService.getWardsByDistrictId(districtId);
  }
}
