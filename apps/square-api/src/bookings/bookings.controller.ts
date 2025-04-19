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
import { BookingsService } from './bookings.service';
import { CreateBookingRequest } from './models/create-booking';
import { UpdateBookingRequest } from './models/update-booking';
import { BookingDto } from './dtos/booking.dto';

@ApiTags('Bookings')
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  @ApiResponse({
    status: 201,
    description: 'The booking has been successfully created.',
    type: BookingDto,
  })
  create(@Body() createBooking: CreateBookingRequest): Promise<BookingDto> {
    return this.bookingsService.create(createBooking);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bookings with pagination' })
  @ApiResponse({
    status: 200,
    description: 'Return all bookings with their trip and user details.',
    type: BookingDto,
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
    return this.bookingsService.findAll(page, limit, sortBy, order);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a booking by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the booking with its trip and user details.',
    type: BookingDto,
  })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  findOne(@Param('id') id: string): Promise<BookingDto> {
    return this.bookingsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a booking' })
  @ApiResponse({
    status: 200,
    description: 'The booking has been successfully updated.',
    type: BookingDto,
  })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  update(
    @Param('id') id: string,
    @Body() updateBooking: UpdateBookingRequest
  ): Promise<BookingDto> {
    return this.bookingsService.update(id, updateBooking);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a booking' })
  @ApiResponse({
    status: 200,
    description: 'The booking has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.bookingsService.remove(id);
  }
}
