import { ApiProperty } from '@nestjs/swagger';
import { TripDto } from '../../trips/dtos/trip.dto';
import { UserDto } from '../../users/dtos/user.dto';

export class BookingDto {
  @ApiProperty({
    description: 'The unique identifier of the booking',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id!: string;

  @ApiProperty({
    description: 'ID of the user who made the booking',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  userId!: string;

  @ApiProperty({
    description: 'ID of the booked trip',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  tripId!: string;

  @ApiProperty({
    description: 'Unique booking code',
    example: 'BK-20240315-001',
  })
  code!: string;

  @ApiProperty({
    description: 'Current status of the booking',
    example: 'confirmed',
  })
  status!: string;

  @ApiProperty({
    description: 'Number of seats booked',
    example: 2,
  })
  numberOfSeats!: number;

  @ApiProperty({
    description: 'Total price of the booking',
    example: 300000,
  })
  totalPrice!: number;

  @ApiProperty({
    description: 'Price per seat',
    example: 150000,
  })
  unitPrice!: number;

  @ApiProperty({
    description: 'Status of the payment',
    example: 'paid',
  })
  paymentStatus!: string;

  @ApiProperty({
    description: 'Payment method used',
    example: 'credit_card',
    required: false,
    nullable: true,
  })
  paymentMethod?: string;

  @ApiProperty({
    description: 'Time when payment was made',
    example: '2024-03-15T10:30:00Z',
    required: false,
    nullable: true,
  })
  paymentTime?: Date;

  @ApiProperty({
    description: 'Additional notes for the booking',
    example: 'Prefer window seats',
    required: false,
    nullable: true,
  })
  notes?: string;

  @ApiProperty({
    description: 'Information about passengers',
    example: [
      {
        fullName: 'John Doe',
        phone: '+84123456789',
        idCard: '123456789',
      },
    ],
  })
  passengerInfo!: Array<{
    fullName: string;
    phone: string;
    idCard: string;
  }>;

  @ApiProperty({
    description: 'Name of the contact person',
    example: 'John Doe',
  })
  contactName!: string;

  @ApiProperty({
    description: 'Phone number of the contact person',
    example: '+84123456789',
  })
  contactPhone!: string;

  @ApiProperty({
    description: 'Email of the contact person',
    example: 'john.doe@example.com',
    required: false,
    nullable: true,
  })
  contactEmail?: string;

  @ApiProperty({
    description: 'Trip details',
    type: () => TripDto,
  })
  trip!: TripDto;

  @ApiProperty({
    description: 'User details',
    type: () => UserDto,
  })
  user!: UserDto;

  @ApiProperty({
    description: 'The timestamp when the booking was created',
    example: '2024-03-15T10:30:00Z',
  })
  createdAt!: Date;

  @ApiProperty({
    description: 'The timestamp when the booking was last updated',
    example: '2024-03-15T10:30:00Z',
  })
  updatedAt!: Date;
}
