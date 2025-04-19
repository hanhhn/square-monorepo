import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsNumber,
  IsOptional,
  Min,
  IsEmail,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class PassengerInfo {
  @ApiProperty({
    description: 'Full name of the passenger',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  fullName!: string;

  @ApiProperty({
    description: 'Phone number of the passenger',
    example: '+84123456789',
  })
  @IsNotEmpty()
  @IsString()
  phone!: string;

  @ApiProperty({
    description: 'ID card number of the passenger',
    example: '123456789',
  })
  @IsNotEmpty()
  @IsString()
  idCard!: string;
}

export class CreateBookingRequest {
  @ApiProperty({
    description: 'ID of the user making the booking',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsNotEmpty()
  @IsUUID()
  userId!: string;

  @ApiProperty({
    description: 'ID of the trip being booked',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsNotEmpty()
  @IsUUID()
  tripId!: string;

  @ApiProperty({
    description: 'Number of seats to book',
    example: 2,
    minimum: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  numberOfSeats!: number;

  @ApiProperty({
    description: 'Contact person name',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  contactName!: string;

  @ApiProperty({
    description: 'Contact person phone number',
    example: '+84123456789',
  })
  @IsNotEmpty()
  @IsString()
  contactPhone!: string;

  @ApiProperty({
    description: 'Contact person email',
    example: 'john.doe@example.com',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiProperty({
    description: 'Additional notes for the booking',
    example: 'Prefer window seats',
    required: false,
  })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({
    description: 'Payment method for the booking',
    example: 'credit_card',
    required: false,
  })
  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @ApiProperty({
    description: 'Information about passengers',
    type: [PassengerInfo],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PassengerInfo)
  passengerInfo!: PassengerInfo[];
}
