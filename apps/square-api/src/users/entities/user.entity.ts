import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { UserRole } from "./user-role.enum";
import { Vehicle } from '../../vehicles/entities/vehicle.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  fullName!: string;

  @Column({ type: 'varchar', length: 20 })
  phone!: string;

  @Column({ type: 'varchar', length: 255 })
  password!: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.RIDER })
  role!: UserRole;

  @Column({ type: 'varchar', length: 255 })
  avatar!: string;

  @Column({ type: 'timestamp', nullable: true })
  lastLogin!: Date | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.driver)
  vehicles!: Vehicle[];
}
