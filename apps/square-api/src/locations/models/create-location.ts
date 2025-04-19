import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

export class CreateLocationRequest {
  @ApiProperty({
    description: 'The name of the location',
    example: 'Central Bus Station',
  })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiProperty({
    description: 'The full address of the location',
    example: '123 Main Street, City Name, Country',
  })
  @IsNotEmpty()
  @IsString()
  address!: string;

  @ApiProperty({
    description: 'The latitude coordinate of the location',
    example: 21.028511,
    minimum: -90,
    maximum: 90,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsLatitude()
  latitude!: number;

  @ApiProperty({
    description: 'The longitude coordinate of the location',
    example: 105.804817,
    minimum: -180,
    maximum: 180,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsLongitude()
  longitude!: number;

  @ApiProperty({
    description: 'The type of location (e.g., bus stop, terminal, depot)',
    example: 'bus_terminal',
  })
  @IsNotEmpty()
  @IsString()
  type!: string;

  @ApiProperty({
    description:
      'The current status of the location (e.g., active, inactive, under_maintenance)',
    example: 'active',
  })
  @IsNotEmpty()
  @IsString()
  status!: string;

  @ApiProperty({
    description: 'Additional description or notes about the location',
    example: 'Main city bus terminal with waiting area and ticket counters',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Name of the contact person at this location',
    example: 'John Smith',
    required: false,
  })
  @IsOptional()
  @IsString()
  contactPerson?: string;

  @ApiProperty({
    description: 'Contact phone number for this location',
    example: '+84123456789',
    required: false,
  })
  @IsOptional()
  @IsString()
  contactPhone?: string;
}
