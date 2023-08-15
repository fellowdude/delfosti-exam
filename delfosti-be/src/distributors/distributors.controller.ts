import {
  Body,
  Controller,
  Delete,
  Post,
  Put,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { DistributorsService } from './distributors.service';
import { Distributor } from './interfaces/distributors.interfaces';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { JwtAuthGuard } from 'src/shared/guard/jwt.guard';

@Controller('distributors')
export class DistributorsController {
  constructor(private readonly distributorsService: DistributorsService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createUserDto: CreateDistributorDto) {
    await this.distributorsService.create(createUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() updateUserDto: CreateDistributorDto) {
    await this.distributorsService.create(updateUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Distributor[]> {
    return this.distributorsService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Distributor> {
    return this.distributorsService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.distributorsService.delete(id);
  }
}
