import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as Schematic } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LDVDetail } from 'src/ldv/schema/ldv-detail.schema';
import { HashBuild } from 'src/utils/hash';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    required: true,
    trim: true,
    length: 6,
    type: String,
  })
  user_code: string;

  @Prop({
    required: true,
    trim: true,
    length: 50,
    type: String,
  })
  name: number;

  @Prop({
    required: true,
    trim: true,
    length: 70,
    type: String,
  })
  password: string;

  @Prop({
    required: true,
    trim: true,
    length: 70,
    type: String,
  })
  father_last_name: string;

  @Prop({
    required: true,
    trim: true,
    length: 70,
    type: String,
  })
  mother_last_name: string;

  @Prop({
    type: Schematic.Types.ObjectId,
    ref: 'LDV_DETAIL',
  })
  role: LDVDetail;

  @Prop({
    default: false,
    type: Boolean,
  })
  is_admin: boolean;

  @Prop()
  create_date: Date;

  @Prop()
  update_date: Date;

  isValidPassword(password: string): boolean {
    const user = this as User;
    return bcrypt.compareSync(password, user.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.isValidPassword = async function (
  password: string,
): Promise<boolean> {
  const hashConstructor = new HashBuild();
  password = await hashConstructor.hashConstructor(password);
  const user = this as User;
  console.log(password, user.password);
  return Promise.resolve(password === user.password);
};
