import {
  Controller,
  Post,
  Put,
  Get,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { LDVService } from './ldv.service';
import { LDVDetailService } from './ldv-detail.service';
import { LDVDto } from './dto/ldv.dto';
import { LDV } from './interfaces/ldv.interface';
import { LDVDetailDto } from './dto/ldv-detail.dto';
import { JwtAuthGuard } from 'src/shared/guard/jwt.guard';

@Controller('list-of-values')
export class LdvController {
  constructor(
    private readonly _LDVService: LDVService,
    private readonly _LDVDetailService: LDVDetailService,
  ) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createDto: LDVDto) {
    return await this._LDVService.create(createDto);
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async update(id: string, @Body() updateDto: LDVDto) {
    return await this._LDVService.update(id, updateDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<LDV[]> {
    return await this._LDVService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Post('detail')
  async createDetail(@Body() createDto: LDVDetailDto) {
    return await this._LDVDetailService.create(createDto);
  }
  @UseGuards(JwtAuthGuard)
  @Put('detail')
  async updateDetail(id: string, @Body() updateDto: LDVDetailDto) {
    return await this._LDVDetailService.update(id, updateDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get('detail/byCode/:code')
  async findByCode(@Param('code') code): Promise<any> {
    return await this._LDVDetailService.findByCode(code);
  }
}
