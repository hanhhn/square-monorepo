import { PartialType } from '@nestjs/swagger';
import { CreateUserRequest } from './create-user';

export class UpdateUserRequest extends PartialType(CreateUserRequest) {}
