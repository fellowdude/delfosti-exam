import { Mongoose } from 'mongoose';
import { OrderSchema } from './schema/orders.schema';

export const OrdersProviders = [
  {
    provide: 'Order',
    useFactory: (mongoose: Mongoose) => mongoose.model('Order', OrderSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
