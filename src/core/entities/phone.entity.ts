import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PhoneType } from '../enums/phone-type.model';

@Entity('phones')
export class PhoneEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id: string;

  @Column({name: 'number', type: 'varchar', length: 10 })
  private _number: string;

  @Column({ name: 'area_code', type: 'varchar', length: 2 })
  private _areaCode: string;

  @Column({ name: 'phone_type', type: 'varchar', length: 31 })
  private _phoneType: PhoneType;

  public get phoneType(): PhoneType {
    return this._phoneType;
  }
  public set phoneType(value: PhoneType) {
    this._phoneType = value;
  }

  public get areaCode(): string {
    return this._areaCode;
  }

  public set areaCode(value: string) {
    this._areaCode = value;
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get number(): string {
    return this._number;
  }

  public set number(value: string) {
    this._number = value;
  }
}
