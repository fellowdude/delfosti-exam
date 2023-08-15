import { Mongoose } from 'mongoose';
import { LdvSchema } from './schema/ldv.schema';
import { LdvDetailSchema } from './schema/ldv-detail.schema';

export const LdvProviders = [
  {
    provide: 'LDV',
    useFactory: (mongoose: Mongoose) => mongoose.model('LDV', LdvSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const LdvDetailProviders = [
  {
    provide: 'LDV_Detail',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('LDV_Detail', LdvDetailSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
