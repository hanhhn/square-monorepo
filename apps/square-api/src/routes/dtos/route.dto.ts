import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from '../../locations/dtos/location.dto';

export class RouteDto {
  @ApiProperty({
    description: 'The unique identifier of the route',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  id!: string;

  @ApiProperty({
    description: 'The name of the route',
    example: 'City Center to Airport Express'
  })
  name!: string;

  @ApiProperty({
    description: 'Unique code identifier for the route',
    example: 'CCT-APT-01'
  })
  code!: string;

  @ApiProperty({
    description: 'ID of the starting location',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  startLocationId!: string;

  @ApiProperty({
    description: 'ID of the ending location',
    example: '123e4567-e89b-12d3-a456-426614174001'
  })
  endLocationId!: string;

  @ApiProperty({
    description: 'Total distance of the route in kilometers',
    example: 25.5
  })
  distanceKm!: number;

  @ApiProperty({
    description: 'Estimated duration of the route in minutes',
    example: 45
  })
  estimatedDurationMinutes!: number;

  @ApiProperty({
    description: 'Current status of the route',
    example: 'active'
  })
  status!: string;

  @ApiProperty({
    description: 'Additional description or notes about the route',
    example: 'Express route with limited stops',
    required: false,
    nullable: true
  })
  description?: string;

  @ApiProperty({
    description: 'Base fare price for the route',
    example: 50000
  })
  baseFare!: number;

  @ApiProperty({
    description: 'Array of stop points along the route',
    example: [
      { locationId: '123e4567-e89b-12d3-a456-426614174002', order: 1, waitingTime: 5 }
    ],
    required: false,
    nullable: true
  })
  stopPoints?: Array<{
    locationId: string;
    order: number;
    waitingTime: number;
  }>;

  @ApiProperty({
    description: 'Starting location details',
    type: () => LocationDto
  })
  startLocation!: LocationDto;

  @ApiProperty({
    description: 'Ending location details',
    type: () => LocationDto
  })
  endLocation!: LocationDto;

  @ApiProperty({
    description: 'The timestamp when the route was created',
    example: '2024-03-15T10:30:00Z'
  })
  createdAt!: Date;

  @ApiProperty({
    description: 'The timestamp when the route was last updated',
    example: '2024-03-15T10:30:00Z'
  })
  updatedAt!: Date;
}
