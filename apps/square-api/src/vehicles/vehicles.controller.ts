import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleRequest } from './models/create-vehicle';
import { UpdateVehicleRequest } from './models/update-vehicle';
import { VehicleDto } from './dtos/vehicle.dto';

@ApiTags('Vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new vehicle' })
  @ApiResponse({
    status: 201,
    description: 'The vehicle has been successfully created.',
    type: VehicleDto,
  })
  create(@Body() createVehicle: CreateVehicleRequest): Promise<VehicleDto> {
    return this.vehiclesService.create(createVehicle);
  }

  @Get()
  @ApiOperation({ summary: 'Get all vehicles with pagination' })
  @ApiResponse({
    status: 200,
    description: 'Return all vehicles.',
    type: [VehicleDto],
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  @ApiQuery({ name: 'order', required: false, enum: ['ASC', 'DESC'] })
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('order') order: 'ASC' | 'DESC' = 'DESC'
  ) {
    return this.vehiclesService.findAll(page, limit, sortBy, order);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vehicle by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the vehicle.',
    type: VehicleDto,
  })
  @ApiResponse({ status: 404, description: 'Vehicle not found.' })
  findOne(@Param('id') id: string): Promise<VehicleDto> {
    return this.vehiclesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a vehicle' })
  @ApiResponse({
    status: 200,
    description: 'The vehicle has been successfully updated.',
    type: VehicleDto,
  })
  @ApiResponse({ status: 404, description: 'Vehicle not found.' })
  update(
    @Param('id') id: string,
    @Body() updateVehicle: UpdateVehicleRequest
  ): Promise<VehicleDto> {
    return this.vehiclesService.update(id, updateVehicle);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a vehicle' })
  @ApiResponse({
    status: 200,
    description: 'The vehicle has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Vehicle not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.vehiclesService.remove(id);
  }
}
