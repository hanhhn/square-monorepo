import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingRequest } from './models/create-booking';
import { UpdateBookingRequest } from './models/update-booking';
import { BookingMapper } from './mappers/booking.mapper';
import { BookingDto } from './dtos/booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>
  ) {}

  async create(createBooking: CreateBookingRequest): Promise<BookingDto> {
    const booking = this.bookingRepository.create({
      ...createBooking,
      code: `BK-${Date.now()}`,
      status: 'pending',
      paymentStatus: 'pending',
      unitPrice: 0, // This should be fetched from trip
      totalPrice: 0, // This should be calculated based on unit price and number of seats
    });
    await this.bookingRepository.save(booking);
    return BookingMapper.toDto(booking);
  }

  async findAll(
    page: number,
    limit: number,
    sortBy: string,
    order: 'ASC' | 'DESC'
  ): Promise<{ items: BookingDto[]; total: number }> {
    const [bookings, total] = await this.bookingRepository.findAndCount({
      relations: ['trip', 'trip.route', 'trip.vehicle', 'user'],
      skip: (page - 1) * limit,
      take: limit,
      order: { [sortBy]: order },
    });

    return {
      items: bookings.map((booking) => BookingMapper.toDto(booking)),
      total,
    };
  }

  async findOne(id: string): Promise<BookingDto> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      relations: ['trip', 'trip.route', 'trip.vehicle', 'user'],
    });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return BookingMapper.toDto(booking);
  }

  async update(
    id: string,
    updateBooking: UpdateBookingRequest
  ): Promise<BookingDto> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      relations: ['trip', 'trip.route', 'trip.vehicle', 'user'],
    });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    Object.assign(booking, updateBooking);
    await this.bookingRepository.save(booking);
    return BookingMapper.toDto(booking);
  }

  async remove(id: string): Promise<void> {
    const result = await this.bookingRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  }
}
