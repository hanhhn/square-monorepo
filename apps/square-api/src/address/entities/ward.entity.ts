import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { District } from './district.entity';

@Entity({ name: 'wards' })
export class Ward {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'character', length: 255 })
  name!: string;

  @ManyToOne(() => District, (district) => district.wards)
  @JoinColumn({ name: 'district_id' })
  district!: District;
}
