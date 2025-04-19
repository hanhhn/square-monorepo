import { Trip } from '../entities/trip.entity';
import { TripDto } from '../dtos/trip.dto';
import { RouteMapper } from '../../routes/mappers/route.mapper';
import { VehicleMapper } from '../../vehicles/mappers/vehicle.mapper';

export class TripMapper {
  static toDto(entity: Trip): TripDto {
    const dto = new TripDto();
    dto.id = entity.id;
    dto.routeId = entity.routeId;
    dto.vehicleId = entity.vehicleId;
    dto.code = entity.code;
    dto.departureTime = entity.departureTime;
    dto.arrivalTime = entity.arrivalTime;
    dto.status = entity.status;
    dto.availableSeats = entity.availableSeats;
    dto.currentPrice = entity.currentPrice;
    dto.description = entity.description;
    dto.scheduleStops = entity.scheduleStops;
    dto.driverName = entity.driverName;
    dto.driverPhone = entity.driverPhone;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;

    if (entity.route) {
      dto.route = RouteMapper.toDto(entity.route);
    }
    if (entity.vehicle) {
      dto.vehicle = VehicleMapper.toDto(entity.vehicle);
    }

    return dto;
  }
}
