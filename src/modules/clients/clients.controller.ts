import { Controller } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { BaseController } from 'src/common/basic-crud';
import { Clients } from './clients.entity';

@Controller('client')
export class ClientsController extends BaseController<Clients> {
  constructor(private readonly clientsService: ClientsService) {
    super(clientsService);
  }
}
