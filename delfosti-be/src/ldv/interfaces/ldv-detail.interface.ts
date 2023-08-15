import { Document } from 'mongoose';

export interface LDVDetail extends Document {
  readonly code: string;
  readonly value: string;
  readonly description: string;
}
