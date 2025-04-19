import { Booking } from '../entities/booking.entity';
import { BookingDto } from '../dtos/booking.dto';
import { TripMapper } from '../../trips/mappers/trip.mapper';
import { UserMapper } from '../../users/mappers/user.mapper';

export class BookingMapper {
  static toDto(entity: Booking): BookingDto {
    const dto = new BookingDto();
    dto.id = entity.id;
    dto.userId = entity.userId;
    dto.tripId = entity.tripId;
    dto.code = entity.code;
    dto.status = entity.status;
    dto.numberOfSeats = entity.numberOfSeats;
    dto.totalPrice = entity.totalPrice;
    dto.unitPrice = entity.unitPrice;
    dto.paymentStatus = entity.paymentStatus;
    dto.paymentMethod = entity.paymentMethod;
    dto.paymentTime = entity.paymentTime;
    dto.notes = entity.notes;
    dto.passengerInfo = entity.passengerInfo;
    dto.contactName = entity.contactName;
    dto.contactPhone = entity.contactPhone;
    dto.contactEmail = entity.contactEmail;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;

    if (entity.trip) {
      dto.trip = TripMapper.toDto(entity.trip);
    }
    if (entity.user) {
      dto.user = UserMapper.toDto(entity.user);
    }

    return dto;
  }
}
