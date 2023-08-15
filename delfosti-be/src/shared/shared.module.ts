import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guard/jwt.guard';

@Module({ providers: [JwtAuthGuard], exports: [JwtAuthGuard] })
export class SharedModule {}
