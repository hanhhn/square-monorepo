import { ApiProperty } from '@nestjs/swagger';

export class VehicleDto {
  @ApiProperty({
    description: 'The unique identifier of the vehicle',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  id!: string;

  @ApiProperty({
    description: 'The name of the vehicle',
    example: 'Toyota Camry #123'
  })
  name!: string;

  @ApiProperty({
    description: 'The license plate number of the vehicle',
    example: 'ABC-123'
  })
  licensePlate!: string;

  @ApiProperty({
    description: 'The type of vehicle (e.g., sedan, SUV, van, bus)',
    example: 'sedan'
  })
  type!: string;

  @ApiProperty({
    description: 'The maximum passenger capacity of the vehicle',
    example: 4,
    minimum: 1
  })
  capacity!: number;

  @ApiProperty({
    description: 'The current status of the vehicle (e.g., active, maintenance, inactive)',
    example: 'active'
  })
  status!: string;

  @ApiProperty({
    description: 'Additional description or notes about the vehicle',
    example: 'Leather seats, GPS navigation',
    required: false,
    nullable: true
  })
  description?: string;

  @ApiProperty({
    description: 'The model of the vehicle',
    example: 'Camry'
  })
  model!: string;

  @ApiProperty({
    description: 'The manufacturer/brand of the vehicle',
    example: 'Toyota'
  })
  manufacturer!: string;

  @ApiProperty({
    description: 'The manufacturing year of the vehicle',
    example: 2023
  })
  year!: number;

  @ApiProperty({
    description: 'The timestamp when the vehicle was created',
    example: '2024-03-15T10:30:00Z'
  })
  createdAt!: Date;

  @ApiProperty({
    description: 'The timestamp when the vehicle was last updated',
    example: '2024-03-15T10:30:00Z'
  })
  updatedAt!: Date;
}
