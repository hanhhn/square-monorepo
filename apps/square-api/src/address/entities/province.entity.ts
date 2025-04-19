import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Country } from './country.entity';
import { District } from './district.entity';

@Entity({ name: 'provinces' })
export class Province {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'character', length: 255 })
  name!: string;

  @ManyToOne(() => Country, (country) => country.provinces)
  @JoinColumn({ name: 'country_id' })
  country!: Country;

  @OneToMany(() => District, (district) => district.province)
  districts!: District[];
}
