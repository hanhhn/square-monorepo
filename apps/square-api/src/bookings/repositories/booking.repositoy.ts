import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Booking } from '../entities/booking.entity';

@Injectable()
export class BookingRepository extends Repository<Booking> {
  constructor(dataSource: DataSource) {
    super(Booking, dataSource.createEntityManager());
  }
}