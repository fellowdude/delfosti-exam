import { Document } from 'mongoose';
import { Product } from 'src/products/interfaces/products.interfaces';

export interface Order extends Document {
  readonly order_number: string;
  readonly products: Array<Product>;
  readonly order_date: Date;
  readonly estimated_delivery_date: Date;
  readonly delivery_date: Date;
  readonly seller_id: string;
  readonly distributor_id: string;
  readonly state: string;
  readonly create_date: Date;
  readonly update_date: Date;
  readonly productList?: any;
}
