import { FederateUnitEntity } from './federate-unit.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cities')
export class CityEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'name', type: 'varchar', length: 63})
  private _name: string;

  private _uf: FederateUnitEntity;

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

  public get federateUnit(): FederateUnitEntity {
    return this._uf;
  }

  public set federateUnit(value: FederateUnitEntity) {
    this._uf = value;
  }
}
