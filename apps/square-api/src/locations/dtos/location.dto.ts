import { ApiProperty } from '@nestjs/swagger';

export class LocationDto {
  @ApiProperty({
    description: 'The unique identifier of the location',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id!: string;

  @ApiProperty({
    description: 'The name of the location',
    example: 'Central Bus Station',
  })
  name!: string;

  @ApiProperty({
    description: 'The full address of the location',
    example: '123 Main Street, City Name, Country',
  })
  address!: string;

  @ApiProperty({
    description: 'The latitude coordinate of the location',
    example: 21.028511,
  })
  latitude!: number;

  @ApiProperty({
    description: 'The longitude coordinate of the location',
    example: 105.804817,
  })
  longitude!: number;

  @ApiProperty({
    description: 'The type of location (e.g., bus stop, terminal, depot)',
    example: 'bus_terminal',
  })
  type!: string;

  @ApiProperty({
    description: 'The current status of the location',
    example: 'active',
  })
  status!: string;

  @ApiProperty({
    description: 'Additional description or notes about the location',
    example: 'Main city bus terminal with waiting area and ticket counters',
    required: false,
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    description: 'Name of the contact person at this location',
    example: 'John Smith',
    required: false,
    nullable: true,
  })
  contactPerson?: string;

  @ApiProperty({
    description: 'Contact phone number for this location',
    example: '+84123456789',
    required: false,
    nullable: true,
  })
  contactPhone?: string;

  @ApiProperty({
    description: 'The timestamp when the location was created',
    example: '2024-03-15T10:30:00Z',
  })
  createdAt!: Date;

  @ApiProperty({
    description: 'The timestamp when the location was last updated',
    example: '2024-03-15T10:30:00Z',
  })
  updatedAt!: Date;
}
