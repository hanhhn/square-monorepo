import { ApiProperty } from '@nestjs/swagger';
import { ProvinceDTO } from './province.dto';

export class DistrictDTO {
  @ApiProperty({ description: 'The unique identifier of the district' })
  id!: number;

  @ApiProperty({ description: 'The name of the district' })
  name!: string;

  @ApiProperty({ description: 'The province this district belongs to', type: () => ProvinceDTO })
  province?: ProvinceDTO;
}
