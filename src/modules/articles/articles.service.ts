import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { Articles } from './ articles.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService extends BaseService<Articles> {
  constructor(
    @InjectRepository(Articles)
    private readonly articlesRepository: Repository<Articles>,
  ) {
    super(articlesRepository);
  }
}
