import { ApiProperty } from '@nestjs/swagger';

export class DistrictDTO {
  @ApiProperty({ description: 'The unique identifier of the district' })
  id!: number;

  @ApiProperty({ description: 'The name of the district' })
  name!: string;
}
