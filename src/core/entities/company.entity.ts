import { District } from './district.entity';
import { City } from './city.entity';
import { FederateUnit } from './federate-unit.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'name', type: 'varchar', length: 127 })
  private _name: string;

  private _district: District;
  private _city: City;
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

  public get district(): District {
    return this._district;
  }

  public set district(value: District) {
    this._district = value;
  }

  public get city(): City {
    return this._city;
  }

  public set city(value: City) {
    this._city = value;
  }

  public get federateUnit(): FederateUnit {
    return this._federateUnit;
  }

  public set federateUnit(value: FederateUnit) {
    this._federateUnit = value;
  }
}
