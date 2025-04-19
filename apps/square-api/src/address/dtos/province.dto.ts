import { ApiProperty } from '@nestjs/swagger';
import { CountryDTO } from './country.dto';

export class ProvinceDTO {
  @ApiProperty({ description: 'The unique identifier of the province' })
  id!: number;

  @ApiProperty({ description: 'The name of the province' })
  name!: string;

  @ApiProperty({ description: 'The country this province belongs to', type: () => CountryDTO })
  country?: CountryDTO;
}
