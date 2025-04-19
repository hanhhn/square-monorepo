import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleRequest } from './models/create-vehicle';
import { UpdateVehicleRequest } from './models/update-vehicle';
import { VehicleMapper } from './mappers/vehicle.mapper';
import { VehicleDto } from './dtos/vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>
  ) {}

  async create(createVehicle: CreateVehicleRequest): Promise<VehicleDto> {
    const vehicle = this.vehicleRepository.create(createVehicle);
    await this.vehicleRepository.save(vehicle);
    return VehicleMapper.toDto(vehicle);
  }

  async findAll(
    page: number,
    limit: number,
    sortBy: string,
    order: 'ASC' | 'DESC'
  ): Promise<{ items: VehicleDto[]; total: number }> {
    const [vehicles, total] = await this.vehicleRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { [sortBy]: order },
    });

    return {
      items: vehicles.map((vehicle) => VehicleMapper.toDto(vehicle)),
      total,
    };
  }

  async findOne(id: string): Promise<VehicleDto> {
    const vehicle = await this.vehicleRepository.findOne({ where: { id } });
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID ${id} not found`);
    }
    return VehicleMapper.toDto(vehicle);
  }

  async update(
    id: string,
    updateVehicle: UpdateVehicleRequest
  ): Promise<VehicleDto> {
    const vehicle = await this.vehicleRepository.findOne({ where: { id } });
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID ${id} not found`);
    }

    Object.assign(vehicle, updateVehicle);
    await this.vehicleRepository.save(vehicle);
    return VehicleMapper.toDto(vehicle);
  }

  async remove(id: string): Promise<void> {
    const result = await this.vehicleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Vehicle with ID ${id} not found`);
    }
  }
}
