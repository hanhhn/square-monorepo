import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { District } from './district.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'wards' })
export class Ward {
  @ApiProperty({ description: 'The unique identifier of the ward' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ description: 'The name of the ward' })
  @Column({ type: 'character', length: 255 })
  name!: string;

  @ApiProperty({ description: 'The district this ward belongs to', type: () => District })
  @ManyToOne(() => District, (district) => district.wards)
  @JoinColumn({ name: 'district_id' })
  district!: District;
}
