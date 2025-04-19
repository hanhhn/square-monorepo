import { PartialType } from '@nestjs/swagger';
import { CreateVehicleRequest } from './create-vehicle';

export class UpdateVehicleRequest extends PartialType(CreateVehicleRequest) {}
