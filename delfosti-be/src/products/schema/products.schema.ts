import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as Schematic } from 'mongoose';
import { LDVDetail } from 'src/ldv/schema/ldv-detail.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop({
    type: Schematic.Types.ObjectId,
    ref: 'LDV_DETAIL',
  })
  color: LDVDetail;

  @Prop({
    type: Schematic.Types.ObjectId,
    ref: 'LDV_DETAIL',
  })
  fabric_type: LDVDetail;

  @Prop({
    type: Schematic.Types.ObjectId,
    ref: 'LDV_DETAIL',
  })
  size: LDVDetail;

  @Prop()
  create_date: Date;

  @Prop()
  update_date: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
