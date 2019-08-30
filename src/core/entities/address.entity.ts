import { PublicPlaceType } from '../enums/public-place-type.model';
import { DistrictEntity } from './district.entity';
import { CityEntity } from './city.entity';
import { FederateUnit } from './federate-unit.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('addresses')
export class AddressEntity {

  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({name: 'public_place', type: 'varchar', length: 127 })
  private _publicPlace: string;

  @Column({ name: 'public_place_type', type: 'varchar', length: 63 })
  private _publicPlaceType: PublicPlaceType;

  private _district: DistrictEntity;
  private _city: CityEntity;
  private _state: FederateUnit;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get publicPlace(): string {
    return this._publicPlace;
  }

  public set publicPlace(value: string) {
    this._publicPlace = value;
  }

  public get publicPlaceType(): PublicPlaceType {
    return this._publicPlaceType;
  }

  public set publicPlaceType(value: PublicPlaceType) {
    this._publicPlaceType = value;
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

  public get state(): FederateUnit {
    return this._state;
  }

  public set state(value: FederateUnit) {
    this._state = value;
  }
}
