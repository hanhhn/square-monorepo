import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Province } from './province.entity';
import { Ward } from './ward.entity';

@Entity({ name: 'districts' })
export class District {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'character', length: 255 })
  name!: string;

  @ManyToOne(() => Province, (province) => province.districts)
  @JoinColumn({ name: 'province_id' })
  province!: Province;

  @OneToMany(() => Ward, (ward) => ward.district)
  wards!: Ward[];
}
