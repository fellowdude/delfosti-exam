import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly user_code: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  readonly father_last_name: string;
  @ApiProperty()
  readonly mother_last_name: string;
  @ApiProperty()
  readonly is_admin: boolean;
  @ApiProperty()
  readonly role: string;
}
