import { Module } from '@nestjs/common';
import { LdvController } from './ldv.controller';
import { LDVService } from './ldv.service';
import { LDVDetailService } from './ldv-detail.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LdvSchema } from './schema/ldv.schema';
import { LdvDetailSchema } from './schema/ldv-detail.schema';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'LDV', schema: LdvSchema }]),
    MongooseModule.forFeature([
      { name: 'LDV_Detail', schema: LdvDetailSchema },
    ]),
    SharedModule,
  ],
  controllers: [LdvController],
  providers: [LDVService, LDVDetailService],
  exports: [LDVService],
})
export class LdvModule {}
