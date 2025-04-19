import { ApiProperty } from '@nestjs/swagger';

export class CountryDto {
  @ApiProperty({ description: 'The unique identifier of the country' })
  id!: number;

  @ApiProperty({ description: 'The name of the country' })
  name!: string;
}