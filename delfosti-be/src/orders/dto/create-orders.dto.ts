import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  readonly order_number: string;
  @ApiProperty()
  readonly products: number;
  @ApiProperty()
  readonly order_date: string;
  @ApiProperty()
  readonly estimated_delivery_date: string;
  @ApiProperty()
  readonly delivery_date: string;
  @ApiProperty()
  readonly seller_id: string;
  @ApiProperty()
  readonly distributor_id: string;
  @ApiProperty()
  readonly state: string;
  @ApiProperty()
  readonly create_date: Date;
}
