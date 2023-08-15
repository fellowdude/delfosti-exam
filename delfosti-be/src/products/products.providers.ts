import { Mongoose } from 'mongoose';
import { ProductSchema } from './schema/products.schema';

export const ProductsProviders = [
  {
    provide: 'Product',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Product', ProductSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
