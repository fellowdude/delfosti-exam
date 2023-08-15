import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-orders.dto';
import { Order } from './interfaces/orders.interfaces';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findOne({ _id: id }).exec();
  }

  async findOneByOrderNumber(order_number: string): Promise<Order> {
    const order = await this.orderModel.aggregate([
      {
        $match: { order_number: order_number },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'seller_id',
          foreignField: '_id',
          as: 'seller',
        },
      },
      {
        $unwind: '$seller',
      },
      {
        $lookup: {
          from: 'ldv_details',
          localField: 'state',
          foreignField: '_id',
          as: 'state',
        },
      },
      {
        $unwind: '$state',
      },
      {
        $lookup: {
          from: 'distributors',
          localField: 'distributor_id',
          foreignField: '_id',
          as: 'distributor',
        },
      },
      {
        $unwind: '$distributor',
      },
      {
        $lookup: {
          from: 'products',
          localField: 'products.product',
          foreignField: '_id',
          as: 'productList',
        },
      },
      {
        $unwind: {
          path: '$productList',
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);
    return order[0];
  }

  async findAll(): Promise<Order[]> {
    return await this.orderModel.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'seller_id',
          foreignField: '_id',
          as: 'seller',
        },
      },
      {
        $unwind: '$seller',
      },
      {
        $lookup: {
          from: 'ldv_details',
          localField: 'state',
          foreignField: '_id',
          as: 'state',
        },
      },
      {
        $unwind: '$state',
      },
      {
        $lookup: {
          from: 'distributors',
          localField: 'distributor_id',
          foreignField: '_id',
          as: 'distributor',
        },
      },
      {
        $unwind: '$distributor',
      },
    ]);
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = this.orderModel.create(createOrderDto);
    return createdOrder;
  }

  async update(id: string, updateOrderDto: CreateOrderDto) {
    const updatedOrder = this.orderModel.updateOne(
      { _id: id },
      { ...updateOrderDto },
    );
    return updatedOrder;
  }

  async delete(id: string) {
    const deletedCat = await this.orderModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
