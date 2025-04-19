import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserDto {
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  id!: string;

  @ApiProperty({
    description: 'Username for login',
    example: 'johndoe'
  })
  username!: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john.doe@example.com'
  })
  email!: string;

  @Exclude()
  password!: string;

  @ApiProperty({
    description: 'Full name of the user',
    example: 'John Doe'
  })
  fullName!: string;

  @ApiProperty({
    description: 'Phone number',
    example: '+84123456789',
    required: false,
    nullable: true
  })
  phone?: string;

  @ApiProperty({
    description: 'Date of birth',
    example: '1990-01-01',
    required: false,
    nullable: true
  })
  dateOfBirth?: Date;

  @ApiProperty({
    description: 'Gender',
    example: 'male'
  })
  gender!: string;

  @ApiProperty({
    description: 'Physical address',
    example: '123 Main Street, City Name',
    required: false,
    nullable: true
  })
  address?: string;

  @ApiProperty({
    description: 'User status',
    example: 'active'
  })
  status!: string;

  @ApiProperty({
    description: 'User role',
    example: 'user'
  })
  role!: string;

  @ApiProperty({
    description: 'URL to user avatar',
    example: 'https://example.com/avatars/user.jpg',
    required: false,
    nullable: true
  })
  avatarUrl?: string;

  @ApiProperty({
    description: 'User preferences and settings',
    example: { theme: 'dark', notifications: true },
    required: false,
    nullable: true
  })
  settings?: Record<string, any>;

  @ApiProperty({
    description: 'Last login timestamp',
    example: '2024-03-15T10:30:00Z',
    required: false,
    nullable: true
  })
  lastLogin?: Date;

  @ApiProperty({
    description: 'The timestamp when the user was created',
    example: '2024-03-15T10:30:00Z'
  })
  createdAt!: Date;

  @ApiProperty({
    description: 'The timestamp when the user was last updated',
    example: '2024-03-15T10:30:00Z'
  })
  updatedAt!: Date;
}
