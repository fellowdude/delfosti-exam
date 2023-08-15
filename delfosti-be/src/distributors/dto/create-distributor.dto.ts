import { ApiProperty } from '@nestjs/swagger';

export class CreateDistributorDto {
  @ApiProperty()
  readonly distributor_code: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly father_last_name: string;
  @ApiProperty()
  readonly mother_last_name: string;
  @ApiProperty()
  readonly create_date: Date;
}
