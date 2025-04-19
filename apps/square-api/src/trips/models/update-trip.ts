import { PartialType } from '@nestjs/swagger';
import { CreateTripRequest } from './create-trip';

export class UpdateTripRequest extends PartialType(CreateTripRequest) {}
