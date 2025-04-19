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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'provinces' })
export class Province {
  @ApiProperty({ description: 'The unique identifier of the province' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ description: 'The name of the province' })
  @Column({ type: 'character', length: 255 })
  name!: string;

  @ApiProperty({ description: 'The country this province belongs to', type: () => Country })
  @ManyToOne(() => Country, (country) => country.provinces)
  @JoinColumn({ name: 'country_id' })
  country!: Country;

  @ApiProperty({ description: 'The districts in this province', type: () => [District] })
  @OneToMany(() => District, (district) => district.province)
  districts!: District[];
}
