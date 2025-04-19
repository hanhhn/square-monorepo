import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsOptional, IsDate, IsEnum, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  DRIVER = 'driver'
}

enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended'
}

export class CreateUserRequest {
  @ApiProperty({
    description: 'Username for login',
    example: 'johndoe'
  })
  @IsNotEmpty()
  @IsString()
  username!: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john.doe@example.com'
  })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({
    description: 'Password',
    example: 'StrongPassword123!'
  })
  @IsNotEmpty()
  @IsString()
  password!: string;

  @ApiProperty({
    description: 'Full name of the user',
    example: 'John Doe'
  })
  @IsNotEmpty()
  @IsString()
  fullName!: string;

  @ApiProperty({
    description: 'Phone number',
    example: '+84123456789',
    required: false
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'Date of birth',
    example: '1990-01-01',
    required: false
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateOfBirth?: Date;

  @ApiProperty({
    description: 'Gender',
    enum: Gender,
    example: Gender.MALE
  })
  @IsNotEmpty()
  @IsEnum(Gender)
  gender!: Gender;

  @ApiProperty({
    description: 'Physical address',
    example: '123 Main Street, City Name',
    required: false
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    description: 'User status',
    enum: UserStatus,
    example: UserStatus.ACTIVE
  })
  @IsNotEmpty()
  @IsEnum(UserStatus)
  status!: UserStatus;

  @ApiProperty({
    description: 'User role',
    enum: UserRole,
    example: UserRole.USER
  })
  @IsNotEmpty()
  @IsEnum(UserRole)
  role!: UserRole;

  @ApiProperty({
    description: 'URL to user avatar',
    example: 'https://example.com/avatars/user.jpg',
    required: false
  })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @ApiProperty({
    description: 'User preferences and settings',
    example: { theme: 'dark', notifications: true },
    required: false
  })
  @IsOptional()
  settings?: Record<string, any>;
}
