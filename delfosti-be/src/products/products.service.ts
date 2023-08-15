import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/products.interfaces';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id }).exec();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.aggregate([
      {
        $lookup: {
          from: 'ldv_details',
          localField: 'color',
          foreignField: '_id',
          as: 'color',
        },
      },
      {
        $unwind: '$color',
      },
      {
        $lookup: {
          from: 'ldv_details',
          localField: 'size',
          foreignField: '_id',
          as: 'size',
        },
      },
      {
        $unwind: '$size',
      },
      {
        $lookup: {
          from: 'ldv_details',
          localField: 'fabric_type',
          foreignField: '_id',
          as: 'fabric_type',
        },
      },
      {
        $unwind: '$fabric_type',
      },
    ]);
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdUser = this.productModel.create(createProductDto);
    return createdUser;
  }

  async update(id: string, updateProductDto: CreateProductDto) {
    const updatedUser = this.productModel.updateOne(
      { _id: id },
      { ...updateProductDto },
    );
    return updatedUser;
  }

  async delete(id: string) {
    const deletedCat = await this.productModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
