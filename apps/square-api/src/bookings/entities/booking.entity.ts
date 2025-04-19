import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Trip } from '../../trips/entities/trip.entity';
import { User } from '../../users/entities/user.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid', name: 'user_id' })
  userId!: string;

  @Column({ type: 'uuid', name: 'trip_id' })
  tripId!: string;

  @Column({ type: 'varchar', length: 100 })
  code!: string;

  @Column({ type: 'varchar', length: 20 })
  status!: string;

  @Column({ type: 'int', name: 'number_of_seats' })
  numberOfSeats!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'total_price' })
  totalPrice!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'unit_price' })
  unitPrice!: number;

  @Column({ type: 'varchar', length: 50, name: 'payment_status' })
  paymentStatus!: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'payment_method',
  })
  paymentMethod?: string;

  @Column({ type: 'timestamp', nullable: true, name: 'payment_time' })
  paymentTime?: Date;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @Column({ type: 'json', nullable: true, name: 'passenger_info' })
  passengerInfo?: any;

  @Column({ type: 'varchar', length: 50, name: 'contact_name' })
  contactName!: string;

  @Column({ type: 'varchar', length: 20, name: 'contact_phone' })
  contactPhone!: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    name: 'contact_email',
  })
  contactEmail?: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(() => Trip)
  @JoinColumn({ name: 'trip_id' })
  trip!: Trip;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
