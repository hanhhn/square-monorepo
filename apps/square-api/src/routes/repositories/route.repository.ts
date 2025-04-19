import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Route } from '../entities/route.entity';

@Injectable()
export class RouteRepository extends Repository<Route> {
  constructor(dataSource: DataSource) {
    super(Route, dataSource.createEntityManager());
  }
}