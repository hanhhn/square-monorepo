import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity({ name: 'vehicles' })
export class Vehicle {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  licensePlate!: string;

  @Column({ type: 'varchar', length: 100 })
  model!: string;

  @Column({ type: 'integer' })
  capacity!: number;

  @Column({ type: 'varchar', length: 50 })
  color!: string;

  @ManyToOne(() => User, (user) => user.vehicles)
  @JoinColumn({ name: 'driver_id' })
  driver!: User;
}