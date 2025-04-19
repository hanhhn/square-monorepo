import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { CreateLocationRequest } from './models/create-location';
import { UpdateLocationRequest } from './models/update-location';
import { LocationMapper } from './mappers/location.mapper';
import { LocationDto } from './dtos/location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>
  ) {}

  async create(createLocation: CreateLocationRequest): Promise<LocationDto> {
    const location = this.locationRepository.create(createLocation);
    await this.locationRepository.save(location);
    return LocationMapper.toDto(location);
  }

  async findAll(
    page: number,
    limit: number,
    sortBy: string,
    order: 'ASC' | 'DESC'
  ): Promise<{ items: LocationDto[]; total: number }> {
    const [locations, total] = await this.locationRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { [sortBy]: order },
    });

    return {
      items: locations.map((location) => LocationMapper.toDto(location)),
      total,
    };
  }

  async findOne(id: string): Promise<LocationDto> {
    const location = await this.locationRepository.findOne({ where: { id } });
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    return LocationMapper.toDto(location);
  }

  async update(
    id: string,
    updateLocation: UpdateLocationRequest
  ): Promise<LocationDto> {
    const location = await this.locationRepository.findOne({ where: { id } });
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }

    Object.assign(location, updateLocation);
    await this.locationRepository.save(location);
    return LocationMapper.toDto(location);
  }

  async remove(id: string): Promise<void> {
    const result = await this.locationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
  }
}
