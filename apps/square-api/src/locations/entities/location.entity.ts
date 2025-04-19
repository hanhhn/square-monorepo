import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 255 })
  address!: string;

  @Column({ name: 'latitude', type: 'decimal', precision: 10, scale: 7 })
  latitude!: number;

  @Column({ name: 'longitude', type: 'decimal', precision: 10, scale: 7 })
  longitude!: number;

  @Column({ name: 'type', type: 'varchar', length: 255 })
  type!: string;

  @Column({ name: 'status', type: 'varchar', length: 255 })
  status!: string;

  @Column({ name: 'description', type: 'varchar', length: 500, nullable: true })
  description!: string;

  @Column({
    name: 'contact_person',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  contactPerson!: string;

  @Column({
    name: 'contact_phone',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  contactPhone!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
