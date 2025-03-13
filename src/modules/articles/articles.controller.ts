import { Controller } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { BaseController } from 'src/common/basic-crud';
import { Articles } from './ articles.entity';

@Controller('articles')
export class ArticlesController extends BaseController<Articles> {
  constructor(private readonly articlesService: ArticlesService) {
    super(articlesService);
  }
}
