import { Module } from '@nestjs/common';
import { DistributorsService } from './distributors.service';
import { DistributorsController } from './distributors.controller';
import { DistributorSchema } from './schema/distributors.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Distributor', schema: DistributorSchema },
    ]),
    AuthModule,
    SharedModule,
  ],
  providers: [DistributorsService],
  controllers: [DistributorsController],
})
export class DistributorsModule {}
