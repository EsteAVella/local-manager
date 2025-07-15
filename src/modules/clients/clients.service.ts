import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { Clients } from './clients.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService extends BaseService<Clients> {
  constructor(
    @InjectRepository(Clients)
    private readonly clientsRepository: Repository<Clients>,
  ) {
    super(clientsRepository);
  }
}
