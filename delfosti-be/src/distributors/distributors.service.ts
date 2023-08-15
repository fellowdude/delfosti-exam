import { Injectable } from '@nestjs/common';
import { Distributor } from './interfaces/distributors.interfaces';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DistributorsService {
  constructor(
    @InjectModel('Distributor')
    private readonly distributorModel: Model<Distributor>,
  ) {}

  async findOne(id: string): Promise<Distributor> {
    return this.distributorModel.findOne({ _id: id }).exec();
  }

  async findAll(): Promise<Distributor[]> {
    return this.distributorModel.find().exec();
  }

  async create(createUserDto: CreateDistributorDto): Promise<Distributor> {
    const createdUser = this.distributorModel.create(createUserDto);
    return createdUser;
  }

  async update(id: string, updateUserDto: CreateDistributorDto) {
    const updatedUser = this.distributorModel.updateOne(
      { _id: id },
      { ...updateUserDto },
    );
    return updatedUser;
  }

  async delete(id: string) {
    const deletedDistributor = await this.distributorModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedDistributor;
  }
}
