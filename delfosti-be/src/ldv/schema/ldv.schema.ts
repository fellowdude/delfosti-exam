import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as Schematic } from 'mongoose';
import { LDVDetail } from './ldv-detail.schema';

export type LdvDocument = HydratedDocument<LDV>;

@Schema()
export class LDV {
  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop({
    type: Array<Schematic.Types.ObjectId>,
    ref: 'LDV_DETAIL',
  })
  details: Array<LDVDetail>;
}

export const LdvSchema = SchemaFactory.createForClass(LDV);
