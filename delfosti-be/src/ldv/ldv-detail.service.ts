import { Injectable, Scope } from '@nestjs/common';
import { Model } from 'mongoose';
import { LDVDetailDto } from './dto/ldv-detail.dto';
import { LDVDetail } from './schema/ldv-detail.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable({ scope: Scope.DEFAULT })
export class LDVDetailService {
  constructor(
    @InjectModel('LDV_Detail')
    private readonly ldvDetailModel: Model<LDVDetail>,
  ) {}

  async findOne(id: string): Promise<LDVDetail> {
    return this.ldvDetailModel.findOne({ _id: id }).exec();
  }

  async findByCode(code: string): Promise<LDVDetail> {
    return this.ldvDetailModel.findOne({ code: code }).exec();
  }

  async findAll(): Promise<LDVDetail[]> {
    return this.ldvDetailModel.find().exec();
  }

  async create(createUserDto: LDVDetailDto): Promise<LDVDetail> {
    const createdLdvDetail = this.ldvDetailModel.create(createUserDto);
    return createdLdvDetail;
  }

  async update(id: string, updateUserDto: LDVDetailDto) {
    const updatedLdvDetail = this.ldvDetailModel.updateOne(
      { _id: id },
      { ...updateUserDto },
    );
    return updatedLdvDetail;
  }

  async delete(id: string) {
    const deletedLdvDetail = await this.ldvDetailModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedLdvDetail;
  }
}
