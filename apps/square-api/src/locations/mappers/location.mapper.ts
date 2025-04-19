import { Location } from '../entities/location.entity';
import { LocationDto } from '../dtos/location.dto';

export class LocationMapper {
  static toDto(entity: Location): LocationDto {
    const dto = new LocationDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.address = entity.address;
    dto.latitude = entity.latitude;
    dto.longitude = entity.longitude;
    dto.type = entity.type;
    dto.status = entity.status;
    dto.description = entity.description;
    dto.contactPerson = entity.contactPerson;
    dto.contactPhone = entity.contactPhone;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
