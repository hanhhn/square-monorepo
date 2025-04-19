import { ApiProperty } from '@nestjs/swagger';

export class WardDTO {
  @ApiProperty({ description: 'The unique identifier of the ward' })
  id!: number;

  @ApiProperty({ description: 'The name of the ward' })
  name!: string;
}
