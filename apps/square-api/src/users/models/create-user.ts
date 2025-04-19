import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserRequest {
  @ApiProperty({ description: 'The email address of the user' })
  @IsEmail()
  email!: string;

  @ApiProperty({ description: 'The full name of the user' })
  @IsString()
  @MinLength(3)
  fullName!: string;

  @ApiProperty({ description: 'The phone number of the user' })
  @IsString()
  @MinLength(10)
  phone!: string;

}
