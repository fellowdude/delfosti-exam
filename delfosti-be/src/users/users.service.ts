import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interfaces';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-users.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('USER') private readonly userModel: Model<User>) {}

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.aggregate([
      {
        $lookup: {
          from: 'ldv_details',
          localField: 'role',
          foreignField: '_id',
          as: 'role',
        },
      },
      {
        $unwind: '$role',
      },
    ]);
  }

  async findAllByRole(role: string): Promise<User[]> {
    return await this.userModel.aggregate([
      {
        $lookup: {
          from: 'ldv_details',
          localField: 'role',
          foreignField: '_id',
          as: 'role',
        },
      },
      {
        $unwind: '$role',
      },
      {
        $match: {
          'role.value': role,
        },
      },
    ]);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    const createdUser = this.userModel.create(createUserDto);
    return createdUser;
  }

  async update(id: string, updateUserDto: CreateUserDto) {
    const updatedUser = this.userModel.updateOne(
      { _id: id },
      { ...updateUserDto },
    );
    return updatedUser;
  }

  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedUser;
  }
}
