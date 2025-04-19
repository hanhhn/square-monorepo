import { Route } from '../../routes/entities/route.entity';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { TripStatus } from './trip-status.enum';
import { Booking } from '../../bookings/entities/booking.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'trips' })
export class Trip {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Route)
  @JoinColumn({ name: 'route_id' })
  route!: Route;

  @ManyToOne(() => Vehicle)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle!: Vehicle;

  @Column({ type: 'timestamp' })
  departureTime!: Date;

  @Column({ type: 'timestamp' })
  arrivalTime!: Date;

  @Column({ type: 'integer' })
  availableSeats!: number;

  @Column({ type: 'enum', enum: TripStatus, default: TripStatus.SCHEDULED })
  status!: TripStatus;

  @OneToMany(() => Booking, (booking) => booking.trip)
  bookings!: Booking[];
}
