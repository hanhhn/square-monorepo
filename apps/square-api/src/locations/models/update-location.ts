import { PartialType } from '@nestjs/swagger';
import { CreateLocationRequest } from './create-location';

export class UpdateLocationRequest extends PartialType(CreateLocationRequest) {}
