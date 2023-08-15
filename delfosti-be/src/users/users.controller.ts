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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { User } from './interfaces/users.interfaces';
import { JwtAuthGuard } from 'src/shared/guard/jwt.guard';
import { HashBuild } from 'src/utils/hash';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const hashConstructor = new HashBuild();
    createUserDto.password = await hashConstructor.hashConstructor(
      createUserDto.password,
    );
    await this.usersService.create(createUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    const hashConstructor = new HashBuild();
    updateUserDto.password = await hashConstructor.hashConstructor(
      updateUserDto.password,
    );
    await this.usersService.update(id, updateUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':role')
  async findAllByRole(@Param('role') role: string): Promise<User[]> {
    return this.usersService.findAllByRole(role);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
