import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsUUID, IsOptional, Min, IsArray } from 'class-validator';

export class CreateRouteRequest {
  @ApiProperty({
    description: 'The name of the route',
    example: 'City Center to Airport Express'
  })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiProperty({
    description: 'Unique code identifier for the route',
    example: 'CCT-APT-01'
  })
  @IsNotEmpty()
  @IsString()
  code!: string;

  @ApiProperty({
    description: 'ID of the starting location',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @IsNotEmpty()
  @IsUUID()
  startLocationId!: string;

  @ApiProperty({
    description: 'ID of the ending location',
    example: '123e4567-e89b-12d3-a456-426614174001'
  })
  @IsNotEmpty()
  @IsUUID()
  endLocationId!: string;

  @ApiProperty({
    description: 'Total distance of the route in kilometers',
    example: 25.5,
    minimum: 0
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  distanceKm!: number;

  @ApiProperty({
    description: 'Estimated duration of the route in minutes',
    example: 45,
    minimum: 1
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  estimatedDurationMinutes!: number;

  @ApiProperty({
    description: 'Current status of the route (active, inactive, maintenance)',
    example: 'active'
  })
  @IsNotEmpty()
  @IsString()
  status!: string;

  @ApiProperty({
    description: 'Additional description or notes about the route',
    example: 'Express route with limited stops',
    required: false
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Base fare price for the route',
    example: 50000,
    minimum: 0
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  baseFare!: number;

  @ApiProperty({
    description: 'Array of stop points along the route',
    example: [
      { locationId: '123e4567-e89b-12d3-a456-426614174002', order: 1, waitingTime: 5 }
    ],
    required: false,
    type: 'array'
  })
  @IsOptional()
  @IsArray()
  stopPoints?: Array<{
    locationId: string;
    order: number;
    waitingTime: number;
  }>;
}
