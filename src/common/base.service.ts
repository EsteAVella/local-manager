import { Injectable } from '@nestjs/common';
import { DeepPartial, ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class BaseService<T extends ObjectLiteral> {
  constructor(private readonly repository: Repository<T>) {}

  async findOneById(id: any): Promise<T> {
    const result = await this.repository.findOne(id);
    if (!result) {
      throw new Error('objet not found');
    }
    return result;
  }

  findAll(): Promise<T[]> {
    return this.repository.find();
  }
  create(createDto: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }
  async update(id: number, updateDto: any): Promise<T> {
    await this.repository.update(id, updateDto);
    return this.findOneById(id);
  }
  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
