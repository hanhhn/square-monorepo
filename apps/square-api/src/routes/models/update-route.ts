import { PartialType } from '@nestjs/swagger';
import { CreateRouteRequest } from './create-route';

export class UpdateRouteRequest extends PartialType(CreateRouteRequest) {}
