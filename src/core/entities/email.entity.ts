import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('emails')
export class EmailEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'value', type: 'varchar', length: 255 })
  private _value: string;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this._value = value;
  }

}
