import { Document } from 'mongoose';
import { LDVDetail } from './ldv-detail.interface';

export interface LDV extends Document {
  readonly code: string;
  readonly name: string;
  readonly details: [LDVDetail];
}
