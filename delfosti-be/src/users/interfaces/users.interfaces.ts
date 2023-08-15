import { Document } from 'mongoose';

export interface User extends Document {
  readonly user_code: string;
  readonly name: string;
  readonly password: string;
  readonly father_last_name: string;
  readonly mother_last_name: string;
  readonly is_admin: boolean;
  readonly role: string;
  readonly create_date: Date;
  readonly update_date: Date;
}
