import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Route } from './entities/route.entity';
import { CreateRouteRequest } from './models/create-route';
import { UpdateRouteRequest } from './models/update-route';
import { RouteMapper } from './mappers/route.mapper';
import { RouteDto } from './dtos/route.dto';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private readonly routeRepository: Repository<Route>
  ) {}

  async create(createRoute: CreateRouteRequest): Promise<RouteDto> {
    const route = this.routeRepository.create(createRoute);
    await this.routeRepository.save(route);
    return RouteMapper.toDto(route);
  }

  async findAll(
    page: number,
    limit: number,
    sortBy: string,
    order: 'ASC' | 'DESC'
  ): Promise<{ items: RouteDto[]; total: number }> {
    const [routes, total] = await this.routeRepository.findAndCount({
      relations: ['startLocation', 'endLocation'],
      skip: (page - 1) * limit,
      take: limit,
      order: { [sortBy]: order },
    });

    return {
      items: routes.map((route) => RouteMapper.toDto(route)),
      total,
    };
  }

  async findOne(id: string): Promise<RouteDto> {
    const route = await this.routeRepository.findOne({
      where: { id },
      relations: ['startLocation', 'endLocation'],
    });
    if (!route) {
      throw new NotFoundException(`Route with ID ${id} not found`);
    }
    return RouteMapper.toDto(route);
  }

  async update(id: string, updateRoute: UpdateRouteRequest): Promise<RouteDto> {
    const route = await this.routeRepository.findOne({
      where: { id },
      relations: ['startLocation', 'endLocation'],
    });
    if (!route) {
      throw new NotFoundException(`Route with ID ${id} not found`);
    }

    Object.assign(route, updateRoute);
    await this.routeRepository.save(route);
    return RouteMapper.toDto(route);
  }

  async remove(id: string): Promise<void> {
    const result = await this.routeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Route with ID ${id} not found`);
    }
  }
}
