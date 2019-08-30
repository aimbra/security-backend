import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professions')
export class ProfessionEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id;

  @Column({ name: 'title', type: 'varchar', length: 63 })
  private _title: string;

  public get id() {
    return this._id;
  }

  public set id(value) {
    this._id = value;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }
}
