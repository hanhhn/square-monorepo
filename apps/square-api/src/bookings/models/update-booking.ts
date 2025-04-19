import { PartialType } from '@nestjs/swagger';
import { CreateBookingRequest } from './create-booking';

export class UpdateBookingRequest extends PartialType(CreateBookingRequest) {}
