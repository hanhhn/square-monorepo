import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { District } from '../entities/district.entity';

@Injectable()
export class DistrictRepository extends Repository<District> {
  constructor(dataSource: DataSource) {
    super(District, dataSource.createEntityManager());
  }
}
