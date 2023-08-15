import { Mongoose } from 'mongoose';
import { DistributorSchema } from './schema/distributors.schema';

export const DistributorProviders = [
  {
    provide: 'Distributor',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Distributor', DistributorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
