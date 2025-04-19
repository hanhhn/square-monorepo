import { ApiProperty } from '@nestjs/swagger';

export class ProvinceDto {
  @ApiProperty({ description: 'The unique identifier of the province' })
  id!: number;

  @ApiProperty({ description: 'The name of the province' })
  name!: string;
}
