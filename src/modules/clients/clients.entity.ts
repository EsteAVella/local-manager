import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clients')
export class Clients extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  telephone: number;

  //need add direccion

  @Column({ type: 'decimal', default: 0 })
  countState: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
