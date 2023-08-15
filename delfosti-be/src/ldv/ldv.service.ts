import { Injectable, Scope } from '@nestjs/common';
import { Model } from 'mongoose';
import { LDVDto } from './dto/ldv.dto';
import { LDV } from './interfaces/ldv.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable({ scope: Scope.DEFAULT })
export class LDVService {
  constructor(@InjectModel('LDV') private readonly ldvModel: Model<LDV>) {}

  async findOne(id: string): Promise<LDV> {
    return this.ldvModel.findOne({ _id: id }).exec();
  }

  async findAll(): Promise<LDV[]> {
    return this.ldvModel.find().exec();
  }

  async create(createUserDto: LDVDto): Promise<LDV> {
    const createdLdv = this.ldvModel.create(createUserDto);
    return createdLdv;
  }

  async update(id: string, updateUserDto: LDVDto) {
    const updatedLdv = this.ldvModel.updateOne(
      { _id: id },
      { ...updateUserDto },
    );
    return updatedLdv;
  }

  async delete(id: string) {
    const deletedLdv = await this.ldvModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedLdv;
  }
}
