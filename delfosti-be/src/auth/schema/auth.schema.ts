import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as Schematic } from 'mongoose';
import { User } from 'src/users/schema/users.schema';

@Schema({
  timestamps: true,
})
export class Auth extends Document {
  @Prop({
    type: Array<Schematic.Types.ObjectId>,
    ref: 'User',
  })
  user_id: User;

  @Prop({
    required: true,
  })
  token: string;

  @Prop({
    required: true,
    default: true,
  })
  is_active: boolean;

  @Prop({
    required: true,
  })
  create_date: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
