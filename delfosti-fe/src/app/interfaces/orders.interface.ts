import { ILDVDetail } from "./ldv.interface";
import { IUser } from "./user.interface";

export interface IDistributor{
  readonly distributor_code: string;
  readonly name: string;
  readonly father_last_name: string;
  readonly mother_last_name: string;
}

export interface IProduct{
  readonly name: string;
  readonly price: number;
  readonly color: ILDVDetail;
  readonly fabric_type: ILDVDetail;
  readonly size: ILDVDetail;
}

export interface IOrder{
  _id: string;
  order_number: string;
  productList: any;
  products: Array<{
    product: string,
    quantity: number
  }>;
  order_date: Date;
  estimated_delivery_date: Date;
  delivery_date: Date;
  seller: IUser;
  distributor: IDistributor;
  state: ILDVDetail;
}
