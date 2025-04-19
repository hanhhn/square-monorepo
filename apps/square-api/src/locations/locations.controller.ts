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
import { LocationsService } from './locations.service';
import { CreateLocationRequest } from './models/create-location';
import { UpdateLocationRequest } from './models/update-location';
import { LocationDto } from './dtos/location.dto';

@ApiTags('Locations')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new location' })
  @ApiResponse({
    status: 201,
    description: 'The location has been successfully created.',
    type: LocationDto,
  })
  create(@Body() createLocation: CreateLocationRequest): Promise<LocationDto> {
    return this.locationsService.create(createLocation);
  }

  @Get()
  @ApiOperation({ summary: 'Get all locations with pagination' })
  @ApiResponse({
    status: 200,
    description: 'Return all locations.',
    type: LocationDto,
    isArray: true,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of items per page',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    type: String,
    description: 'Field to sort by',
  })
  @ApiQuery({
    name: 'order',
    required: false,
    enum: ['ASC', 'DESC'],
    description: 'Sort order',
  })
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('order') order: 'ASC' | 'DESC' = 'DESC'
  ) {
    return this.locationsService.findAll(page, limit, sortBy, order);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a location by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the location.',
    type: LocationDto,
  })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  findOne(@Param('id') id: string): Promise<LocationDto> {
    return this.locationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a location' })
  @ApiResponse({
    status: 200,
    description: 'The location has been successfully updated.',
    type: LocationDto,
  })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  update(
    @Param('id') id: string,
    @Body() updateLocation: UpdateLocationRequest
  ): Promise<LocationDto> {
    return this.locationsService.update(id, updateLocation);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a location' })
  @ApiResponse({
    status: 200,
    description: 'The location has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.locationsService.remove(id);
  }
}
