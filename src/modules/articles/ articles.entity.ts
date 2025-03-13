import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';

@Entity('articles')
export class Articles extends BaseEntity {
  @PrimaryColumn('increment')
  id: number;
}
