import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Province } from './province.entity';

@Entity({ name: 'Countries' })
export class Country {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'character', length: 255 })
  name!: string;

  @OneToMany(() => Province, (province) => province.country)
  provinces!: Province[];
}
