import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as Schematic } from 'mongoose';
import { Distributor } from 'src/distributors/schema/distributors.schema';
import { LDVDetail } from 'src/ldv/schema/ldv-detail.schema';
import { Product } from 'src/products/schema/products.schema';
import { User } from 'src/users/schema/users.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({
    required: true,
  })
  order_number: string;

  @Prop({
    type: Array<Schematic.Types.ObjectId>,
    ref: 'Products',
  })
  products: Array<Product>;

  @Prop({
    type: Date,
  })
  order_date: Date;

  @Prop({
    type: Date,
  })
  estimated_delivery_date: Date;

  @Prop({
    type: Date,
  })
  delivery_date: Date;

  @Prop({
    type: Schematic.Types.ObjectId,
    ref: 'USER',
  })
  seller_id: User;

  @Prop({
    type: Schematic.Types.ObjectId,
    ref: 'DISTRIBUTOR',
  })
  distributor_id: Distributor;

  @Prop({
    type: Schematic.Types.ObjectId,
    ref: 'LDV_DETAIL',
  })
  state: LDVDetail;

  @Prop()
  create_date: Date;

  @Prop()
  update_date: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
