import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Location } from '../../locations/entities/location.entity';

@Entity('routes')
export class Route {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 100 })
  code!: string;

  @Column({ type: 'uuid', name: 'start_location_id' })
  startLocationId!: string;

  @Column({ type: 'uuid', name: 'end_location_id' })
  endLocationId!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'distance_km' })
  distanceKm!: number;

  @Column({ type: 'int', name: 'estimated_duration_minutes' })
  estimatedDurationMinutes!: number;

  @Column({ type: 'varchar', length: 20 })
  status!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'base_fare' })
  baseFare!: number;

  @Column({ type: 'json', nullable: true, name: 'stop_points' })
  stopPoints?: any;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(() => Location)
  @JoinColumn({ name: 'start_location_id' })
  startLocation!: Location;

  @ManyToOne(() => Location)
  @JoinColumn({ name: 'end_location_id' })
  endLocation!: Location;
}
