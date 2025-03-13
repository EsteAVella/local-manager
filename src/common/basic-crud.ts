import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseService } from './base.service';
import { ObjectLiteral } from 'typeorm';

@Controller()
export class BaseController<T extends ObjectLiteral> {
  constructor(private readonly baseService: BaseService<T>) {}

  @Get()
  async findAll(): Promise<Partial<T>[]> {
    return this.baseService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: any): Promise<T> {
    return this.baseService.findOneById(id);
  }
  @Post()
  async create(@Body() body: any): Promise<T> {
    return this.baseService.create(body);
  }
  @Patch(':id')
  async update(@Param('id') id: any, @Body() body: any): Promise<T> {
    return this.baseService.update(id, body);
  }
  @Delete(':id')
  async remove(@Param('id') id: any) {
    try {
      await this.baseService.remove(id);
      return {
        success: true,
        message: `delete succefully id:${id}`,
      };
    } catch (error) {
      return {
        success: false,
        message: `cannot delete id:${id} ` + error.message,
      };
    }
  }
}
