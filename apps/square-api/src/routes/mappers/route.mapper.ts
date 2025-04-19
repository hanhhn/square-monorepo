import { Route } from '../entities/route.entity';
import { RouteDto } from '../dtos/route.dto';
import { LocationMapper } from '../../locations/mappers/location.mapper';

export class RouteMapper {
  static toDto(entity: Route): RouteDto {
    const dto = new RouteDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.code = entity.code;
    dto.startLocationId = entity.startLocationId;
    dto.endLocationId = entity.endLocationId;
    dto.distanceKm = entity.distanceKm;
    dto.estimatedDurationMinutes = entity.estimatedDurationMinutes;
    dto.status = entity.status;
    dto.description = entity.description;
    dto.baseFare = entity.baseFare;
    dto.stopPoints = entity.stopPoints;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;

    if (entity.startLocation) {
      dto.startLocation = LocationMapper.toDto(entity.startLocation);
    }
    if (entity.endLocation) {
      dto.endLocation = LocationMapper.toDto(entity.endLocation);
    }

    return dto;
  }
}
