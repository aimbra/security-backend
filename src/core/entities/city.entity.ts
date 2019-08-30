import { FederateUnit } from './federate-unit.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cities')
export class CityEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'name', type: 'varchar', length: 63})
  private _name: string;

  private _federateUnit: FederateUnit;

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

  public get federateUnit(): FederateUnit {
    return this._federateUnit;
  }

  public set federateUnit(value: FederateUnit) {
    this._federateUnit = value;
  }
}
