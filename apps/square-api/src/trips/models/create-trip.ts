import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsDate,
  IsNumber,
  IsOptional,
  Min,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTripRequest {
  @ApiProperty({
    description: 'ID of the route for this trip',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsNotEmpty()
  @IsUUID()
  routeId!: string;

  @ApiProperty({
    description: 'ID of the vehicle assigned to this trip',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsNotEmpty()
  @IsUUID()
  vehicleId!: string;

  @ApiProperty({
    description: 'Unique code identifier for the trip',
    example: 'TRIP-001-20240315',
  })
  @IsNotEmpty()
  @IsString()
  code!: string;

  @ApiProperty({
    description: 'Scheduled departure time',
    example: '2024-03-15T08:00:00Z',
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  departureTime!: Date;

  @ApiProperty({
    description: 'Scheduled arrival time',
    example: '2024-03-15T10:30:00Z',
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  arrivalTime!: Date;

  @ApiProperty({
    description:
      'Current status of the trip (scheduled, in-progress, completed, cancelled)',
    example: 'scheduled',
  })
  @IsNotEmpty()
  @IsString()
  status!: string;

  @ApiProperty({
    description: 'Number of available seats',
    example: 30,
    minimum: 0,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  availableSeats!: number;

  @ApiProperty({
    description: 'Current ticket price for the trip',
    example: 150000,
    minimum: 0,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  currentPrice!: number;

  @ApiProperty({
    description: 'Additional description or notes about the trip',
    example: 'Express service with complimentary WiFi',
    required: false,
  })
  @IsOptional()
  @IsString()
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
    type: 'array',
  })
  @IsOptional()
  @IsArray()
  scheduleStops?: Array<{
    locationId: string;
    arrivalTime: Date;
    departureTime: Date;
  }>;

  @ApiProperty({
    description: 'Name of the assigned driver',
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  driverName?: string;

  @ApiProperty({
    description: 'Contact number of the assigned driver',
    example: '+84123456789',
    required: false,
  })
  @IsOptional()
  @IsString()
  driverPhone?: string;
}
