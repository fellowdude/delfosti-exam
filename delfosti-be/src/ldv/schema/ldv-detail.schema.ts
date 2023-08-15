import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LdvDetailDocument = HydratedDocument<LDVDetail>;

@Schema()
export class LDVDetail {
  @Prop()
  code: string;

  @Prop()
  value: string;

  @Prop()
  description: string;
}

export const LdvDetailSchema = SchemaFactory.createForClass(LDVDetail);
