import { ApiProperty } from '@nestjs/swagger';
import { DistrictDTO } from './district.dto';

export class WardDTO {
  @ApiProperty({ description: 'The unique identifier of the ward' })
  id!: number;

  @ApiProperty({ description: 'The name of the ward' })
  name!: string;

  @ApiProperty({ description: 'The district this ward belongs to', type: () => DistrictDTO })
  district?: DistrictDTO;
}
