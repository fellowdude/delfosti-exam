import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly price: number;
  readonly color: string;
  readonly fabric_type: string;
  readonly size: string;
  readonly create_date: Date;
  readonly update_date: Date;
}
