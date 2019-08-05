import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('federate_units')
export class FederateUnit {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'name', type: 'varchar', length: 63 })
  private _name: string;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

}
