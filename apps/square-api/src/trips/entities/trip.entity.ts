import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Route } from '../../routes/entities/route.entity';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';

@Entity('trips')
export class Trip {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid', name: 'route_id' })
  routeId!: string;

  @Column({ type: 'uuid', name: 'vehicle_id' })
  vehicleId!: string;

  @Column({ type: 'varchar', length: 100 })
  code!: string;

  @Column({ type: 'timestamp', name: 'departure_time' })
  departureTime!: Date;

  @Column({ type: 'timestamp', name: 'arrival_time' })
  arrivalTime!: Date;

  @Column({ type: 'varchar', length: 20 })
  status!: string;

  @Column({ type: 'int', name: 'available_seats' })
  availableSeats!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'current_price' })
  currentPrice!: number;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'json', nullable: true, name: 'schedule_stops' })
  scheduleStops?: any;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'driver_name' })
  driverName?: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'driver_phone' })
  driverPhone?: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(() => Route)
  @JoinColumn({ name: 'route_id' })
  route!: Route;

  @ManyToOne(() => Vehicle)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle!: Vehicle;
}
