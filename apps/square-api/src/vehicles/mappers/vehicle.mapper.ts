import { Vehicle } from '../entities/vehicle.entity';
import { VehicleDto } from '../dtos/vehicle.dto';

export class VehicleMapper {
  static toDto(entity: Vehicle): VehicleDto {
    const dto = new VehicleDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.licensePlate = entity.licensePlate;
    dto.type = entity.type;
    dto.capacity = entity.capacity;
    dto.status = entity.status;
    dto.description = entity.description;
    dto.model = entity.model;
    dto.manufacturer = entity.manufacturer;
    dto.year = entity.year;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}