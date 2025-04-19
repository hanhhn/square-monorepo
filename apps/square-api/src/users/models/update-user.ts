import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserRequest } from './create-user';

// Omit password from update request and make all fields optional
export class UpdateUserRequest extends PartialType(
  OmitType(CreateUserRequest, ['password'] as const)
) {}
