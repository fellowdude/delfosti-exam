import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly price: number;
  @ApiProperty()
  readonly color: string;
  @ApiProperty()
  readonly fabric_type: string;
  @ApiProperty()
  readonly size: string;
  @ApiProperty()
  readonly create_date: Date;
}
