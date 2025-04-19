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
import { TripsService } from './trips.service';
import { CreateTripRequest } from './models/create-trip';
import { UpdateTripRequest } from './models/update-trip';
import { TripDto } from './dtos/trip.dto';

@ApiTags('Trips')
@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new trip' })
  @ApiResponse({
    status: 201,
    description: 'The trip has been successfully created.',
    type: TripDto,
  })
  create(@Body() createTrip: CreateTripRequest): Promise<TripDto> {
    return this.tripsService.create(createTrip);
  }

  @Get()
  @ApiOperation({ summary: 'Get all trips with pagination' })
  @ApiResponse({
    status: 200,
    description: 'Return all trips with their route and vehicle details.',
    type: TripDto,
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
    @Query('sortBy') sortBy = 'departureTime',
    @Query('order') order: 'ASC' | 'DESC' = 'ASC'
  ) {
    return this.tripsService.findAll(page, limit, sortBy, order);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a trip by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the trip with its route and vehicle details.',
    type: TripDto,
  })
  @ApiResponse({ status: 404, description: 'Trip not found.' })
  findOne(@Param('id') id: string): Promise<TripDto> {
    return this.tripsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a trip' })
  @ApiResponse({
    status: 200,
    description: 'The trip has been successfully updated.',
    type: TripDto,
  })
  @ApiResponse({ status: 404, description: 'Trip not found.' })
  update(
    @Param('id') id: string,
    @Body() updateTrip: UpdateTripRequest
  ): Promise<TripDto> {
    return this.tripsService.update(id, updateTrip);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a trip' })
  @ApiResponse({
    status: 200,
    description: 'The trip has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Trip not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.tripsService.remove(id);
  }
}
