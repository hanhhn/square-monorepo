import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from './entities/trip.entity';
import { CreateTripRequest } from './models/create-trip';
import { UpdateTripRequest } from './models/update-trip';
import { TripMapper } from './mappers/trip.mapper';
import { TripDto } from './dtos/trip.dto';

@Injectable()
export class TripsService {
  constructor(
    @InjectRepository(Trip)
    private readonly tripRepository: Repository<Trip>
  ) {}

  async create(createTrip: CreateTripRequest): Promise<TripDto> {
    const trip = this.tripRepository.create(createTrip);
    await this.tripRepository.save(trip);
    return TripMapper.toDto(trip);
  }

  async findAll(
    page: number,
    limit: number,
    sortBy: string,
    order: 'ASC' | 'DESC'
  ): Promise<{ items: TripDto[]; total: number }> {
    const [trips, total] = await this.tripRepository.findAndCount({
      relations: [
        'route',
        'route.startLocation',
        'route.endLocation',
        'vehicle',
      ],
      skip: (page - 1) * limit,
      take: limit,
      order: { [sortBy]: order },
    });

    return {
      items: trips.map((trip) => TripMapper.toDto(trip)),
      total,
    };
  }

  async findOne(id: string): Promise<TripDto> {
    const trip = await this.tripRepository.findOne({
      where: { id },
      relations: [
        'route',
        'route.startLocation',
        'route.endLocation',
        'vehicle',
      ],
    });
    if (!trip) {
      throw new NotFoundException(`Trip with ID ${id} not found`);
    }
    return TripMapper.toDto(trip);
  }

  async update(id: string, updateTrip: UpdateTripRequest): Promise<TripDto> {
    const trip = await this.tripRepository.findOne({
      where: { id },
      relations: [
        'route',
        'route.startLocation',
        'route.endLocation',
        'vehicle',
      ],
    });
    if (!trip) {
      throw new NotFoundException(`Trip with ID ${id} not found`);
    }

    Object.assign(trip, updateTrip);
    await this.tripRepository.save(trip);
    return TripMapper.toDto(trip);
  }

  async remove(id: string): Promise<void> {
    const result = await this.tripRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Trip with ID ${id} not found`);
    }
  }
}
