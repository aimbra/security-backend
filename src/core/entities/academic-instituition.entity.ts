import { City } from './city.entity';
import { FederateUnit } from './federate-unit.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('academic_instituitions')
export class AcademicInstituition {

  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  private _name: string;

  private _city: City;
  private _uf: FederateUnit;

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get city(): City {
    return this._city;
  }

  public set city(value: City) {
    this._city = value;
  }

  public get uf(): FederateUnit {
    return this._uf;
  }

  public set uf(value: FederateUnit) {
    this._uf = value;
  }
}
