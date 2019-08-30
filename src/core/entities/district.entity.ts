import { City } from './city.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('districts')
export class DistrictEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'name', type: 'varchar', length: 63 })
  private _name: string;

  private _city: City;

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

  public get city(): City {
    return this._city;
  }

  public set city(value: City) {
    this._city = value;
  }
}
