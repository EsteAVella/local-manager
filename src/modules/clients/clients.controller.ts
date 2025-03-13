import { Controller } from '@nestjs/common';
import { ClientService } from './clients.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
}
