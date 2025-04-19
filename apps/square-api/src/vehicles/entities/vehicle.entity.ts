import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ManyToOne, JoinColumn } from 'typeorm';
@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  name!: string;

  @Column({ name: 'license_plate', type: 'varchar', length: 255 })
  licensePlate!: string;

  @Column({ name: 'type', type: 'varchar', length: 255 })
  type!: string;

  @Column({ name: 'capacity', type: 'integer' })
  capacity!: number;

  @Column({ name: 'status', type: 'varchar', length: 255 })
  status!: string;

  @Column({ name: 'description', type: 'varchar', length: 500, nullable: true })
  description!: string;

  @Column({ name: 'model', type: 'varchar', length: 255 })
  model!: string;

  @Column({ name: 'manufacturer', type: 'varchar', length: 255 })
  manufacturer!: string;

  @Column({ name: 'year', type: 'integer' })
  year!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.vehicles)
  @JoinColumn({ name: 'driver_id' })
  driver!: User;
}
