import { Trip } from '../../trips/entities/trip.entity';
import { User } from '../../users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { BookingStatus } from './booking-status.enum';

@Entity({ name: 'bookings' })
export class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'rider_id' })
  rider!: User;

  @ManyToOne(() => Trip)
  @JoinColumn({ name: 'trip_id' })
  trip!: Trip;

  @Column({ type: 'integer' })
  seatsBooked!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice!: number;

  @Column({
    type: 'enum',
    enum: BookingStatus,
    default: BookingStatus.CONFIRMED,
  })
  status!: BookingStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  bookedAt!: Date;
}
