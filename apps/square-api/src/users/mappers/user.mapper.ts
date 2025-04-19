import { User } from '../entities/user.entity';
import { UserDto } from '../dtos/user.dto';

export class UserMapper {
  static toDto(entity: User): UserDto {
    const dto = new UserDto();
    dto.id = entity.id;
    dto.username = entity.username;
    dto.email = entity.email;
    dto.fullName = entity.fullName;
    dto.phone = entity.phone;
    dto.dateOfBirth = entity.dateOfBirth;
    dto.gender = entity.gender;
    dto.address = entity.address;
    dto.status = entity.status;
    dto.role = entity.role;
    dto.avatarUrl = entity.avatarUrl;
    dto.settings = entity.settings;
    dto.lastLogin = entity.lastLogin;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
