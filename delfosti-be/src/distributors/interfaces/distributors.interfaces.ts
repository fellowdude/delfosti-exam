import { Document } from 'mongoose';

export interface Distributor extends Document {
  readonly distributor_code: string;
  readonly name: string;
  readonly father_last_name: string;
  readonly mother_last_name: string;
  readonly create_date: Date;
  readonly update_date: Date;
}
