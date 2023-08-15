import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DistributorDocument = HydratedDocument<Distributor>;

@Schema()
export class Distributor {
  @Prop()
  distributor_code: string;

  @Prop()
  name: number;

  @Prop()
  father_last_name: string;

  @Prop()
  mother_last_name: string;

  @Prop()
  create_date: Date;

  @Prop()
  update_date: Date;
}

export const DistributorSchema = SchemaFactory.createForClass(Distributor);
