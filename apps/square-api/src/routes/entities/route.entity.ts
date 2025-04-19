import { Location } from '../../locations/entities/location.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'routes' })
export class Route {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @ManyToOne(() => Location)
  @JoinColumn({ name: 'start_location_id' })
  startLocation!: Location;

  @ManyToOne(() => Location)
  @JoinColumn({ name: 'end_location_id' })
  endLocation!: Location;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  basePrice!: number;

  @Column({ type: 'integer' }) // in minutes
  estimatedDuration!: number;

  @Column({ type: 'integer' }) // in meters
  distance!: number;
}
