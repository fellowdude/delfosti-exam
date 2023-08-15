import { Module } from '@nestjs/common';
//import { DbModule } from './database/db.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { LdvModule } from './ldv/ldv.module';
import { DistributorsModule } from './distributors/distributors.module';
import { AuthModule } from './auth/auth.module';
//import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/delfosti_exam'),
    //DbModule,
    UsersModule,
    ProductsModule,
    LdvModule,
    DistributorsModule,
    AuthModule,
    OrdersModule,
    SharedModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
