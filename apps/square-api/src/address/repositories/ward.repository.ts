import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Ward } from '../entities/ward.entity';

@Injectable()
export class WardRepository extends Repository<Ward> {
  constructor(private dataSource: DataSource) {
    super(Ward, dataSource.createEntityManager());
  }
}
