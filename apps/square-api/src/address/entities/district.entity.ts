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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'districts' })
export class District {
  @ApiProperty({ description: 'The unique identifier of the district' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ description: 'The name of the district' })
  @Column({ type: 'character', length: 255 })
  name!: string;

  @ApiProperty({ description: 'The province this district belongs to', type: () => Province })
  @ManyToOne(() => Province, (province) => province.districts)
  @JoinColumn({ name: 'province_id' })
  province!: Province;

  @ApiProperty({ description: 'The wards in this district', type: () => [Ward] })
  @OneToMany(() => Ward, (ward) => ward.district)
  wards!: Ward[];
}
