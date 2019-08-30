import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('chronologies')
export class ChronologyEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: any;

  @CreateDateColumn({ name: 'created_at'})
  private _createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at'})
  private _updateAt: Date;
}
