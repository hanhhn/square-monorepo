import { ApiProperty } from '@nestjs/swagger';
import { RouteDto } from '../../routes/dtos/route.dto';
import { VehicleDto } from '../../vehicles/dtos/vehicle.dto';

export class TripDto {
  @ApiProperty({
    description: 'The unique identifier of the trip',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id!: string;

  @ApiProperty({
    description: 'ID of the route for this trip',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  routeId!: string;

  @ApiProperty({
    description: 'ID of the vehicle assigned to this trip',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  vehicleId!: string;

  @ApiProperty({
    description: 'Unique code identifier for the trip',
    example: 'TRIP-001-20240315',
  })
  code!: string;

  @ApiProperty({
    description: 'Scheduled departure time',
    example: '2024-03-15T08:00:00Z',
  })
  departureTime!: Date;

  @ApiProperty({
    description: 'Scheduled arrival time',
    example: '2024-03-15T10:30:00Z',
  })
  arrivalTime!: Date;

  @ApiProperty({
    description: 'Current status of the trip',
    example: 'scheduled',
  })
  status!: string;

  @ApiProperty({
    description: 'Number of available seats',
    example: 30,
  })
  availableSeats!: number;

  @ApiProperty({
    description: 'Current ticket price for the trip',
    example: 150000,
  })
  currentPrice!: number;

  @ApiProperty({
    description: 'Additional description or notes about the trip',
    example: 'Express service with complimentary WiFi',
    required: false,
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    description: 'Schedule of stops along the route',
    example: [
      {
        locationId: '123e4567-e89b-12d3-a456-426614174002',
        arrivalTime: '2024-03-15T09:15:00Z',
        departureTime: '2024-03-15T09:20:00Z',
      },
    ],
    required: false,
    nullable: true,
  })
  scheduleStops?: Array<{
    locationId: string;
    arrivalTime: Date;
    departureTime: Date;
  }>;

  @ApiProperty({
    description: 'Name of the assigned driver',
    example: 'John Doe',
    required: false,
    nullable: true,
  })
  driverName?: string;

  @ApiProperty({
    description: 'Contact number of the assigned driver',
    example: '+84123456789',
    required: false,
    nullable: true,
  })
  driverPhone?: string;

  @ApiProperty({
    description: 'Route details',
    type: () => RouteDto,
  })
  route!: RouteDto;

  @ApiProperty({
    description: 'Vehicle details',
    type: () => VehicleDto,
  })
  vehicle!: VehicleDto;

  @ApiProperty({
    description: 'The timestamp when the trip was created',
    example: '2024-03-15T10:30:00Z',
  })
  createdAt!: Date;

  @ApiProperty({
    description: 'The timestamp when the trip was last updated',
    example: '2024-03-15T10:30:00Z',
  })
  updatedAt!: Date;
}
