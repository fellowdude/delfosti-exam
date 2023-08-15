import {
  Controller,
  Get,
  Delete,
  Post,
  Put,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-orders.dto';
import { Order } from './interfaces/orders.interfaces';
import { JwtAuthGuard } from 'src/shared/guard/jwt.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    await this.ordersService.create(createOrderDto);
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() updateOrderDto: CreateOrderDto) {
    await this.ordersService.create(updateOrderDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('number/:order_number')
  async findOneByOrderNumber(
    @Param('order_number') order_number: string,
  ): Promise<Order> {
    console.log(order_number);
    return this.ordersService.findOneByOrderNumber(order_number);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.ordersService.delete(id);
  }
}
