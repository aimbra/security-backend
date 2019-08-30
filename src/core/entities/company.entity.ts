import { DistrictEntity } from './district.entity';
import { CityEntity } from './city.entity';
import { FederateUnitEntity } from './federate-unit.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('companies')
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'name', type: 'varchar', length: 127 })
  private _name: string;

  private _district: DistrictEntity;
  private _city: CityEntity;
  private _federateUnit: FederateUnitEntity;

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

  public get district(): DistrictEntity {
    return this._district;
  }

  public set district(value: DistrictEntity) {
    this._district = value;
  }

  public get city(): CityEntity {
    return this._city;
  }

  public set city(value: CityEntity) {
    this._city = value;
  }

  public get federateUnit(): FederateUnitEntity {
    return this._federateUnit;
  }

  public set federateUnit(value: FederateUnitEntity) {
    this._federateUnit = value;
  }
}
