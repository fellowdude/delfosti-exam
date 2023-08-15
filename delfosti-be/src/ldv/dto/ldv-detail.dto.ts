import { ApiProperty } from '@nestjs/swagger';

export class LDVDetailDto {
  @ApiProperty()
  readonly code: string;
  @ApiProperty()
  readonly value: number;
  @ApiProperty()
  readonly description: string;
}
