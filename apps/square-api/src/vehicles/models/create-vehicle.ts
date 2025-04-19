import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateVehicleRequest {
  @ApiProperty({
    description: 'The name of the vehicle',
    example: 'Toyota Camry #123'
  })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiProperty({
    description: 'The license plate number of the vehicle',
    example: 'ABC-123'
  })
  @IsNotEmpty()
  @IsString()
  licensePlate!: string;

  @ApiProperty({
    description: 'The type of vehicle (e.g., sedan, SUV, van, bus)',
    example: 'sedan'
  })
  @IsNotEmpty()
  @IsString()
  type!: string;

  @ApiProperty({
    description: 'The maximum passenger capacity of the vehicle',
    example: 4,
    minimum: 1
  })
  @IsNotEmpty()
  @IsNumber()
  capacity!: number;

  @ApiProperty({
    description: 'The current status of the vehicle (e.g., active, maintenance, inactive)',
    example: 'active'
  })
  @IsNotEmpty()
  @IsString()
  status!: string;

  @ApiProperty({
    description: 'Additional description or notes about the vehicle',
    example: 'Leather seats, GPS navigation',
    required: false
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The model of the vehicle',
    example: 'Camry'
  })
  @IsNotEmpty()
  @IsString()
  model!: string;

  @ApiProperty({
    description: 'The manufacturer/brand of the vehicle',
    example: 'Toyota'
  })
  @IsNotEmpty()
  @IsString()
  manufacturer!: string;

  @ApiProperty({
    description: 'The manufacturing year of the vehicle',
    example: 2023,
    minimum: 1900
  })
  @IsNotEmpty()
  @IsNumber()
  year!: number;
}