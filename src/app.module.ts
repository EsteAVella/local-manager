import { Module } from '@nestjs/common';
import { ArticlesModule } from './modules/articles/articles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articles } from './modules/articles/ articles.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3307,
      username: 'esteban',
      password: 'qwe123',
      database: 'local',
      entities: [Articles],
      synchronize: true,
      migrations: ['src/migrations/.ts'],
    }),
    ArticlesModule,
  ],
})
export class AppModule {}
