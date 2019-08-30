import { ProfessionEntity } from './profession.entity';
import { PersonEntity } from './person.entity';
import { PhoneEntity } from './phone.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CompanyEntity } from './company.entity';

@Entity('finacial_officers')
export class FinancialOfficerEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'acting_time_in_mouth', type: 'smallint' })
  private _actingTimeInMouth: number;

  @Column({ name: 'salary', type: 'numeric' })
  private _salary: number;

  private _profession: ProfessionEntity;
  private _company: CompanyEntity;
  private _person: PersonEntity;
  private _phone: PhoneEntity;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get company(): CompanyEntity {
    return this._company;
  }

  public set company(value: CompanyEntity) {
    this._company = value;
  }

  public get actingTimeInMouth(): number {
    return this._actingTimeInMouth;
  }

  public set actingTimeInMouth(value: number) {
    this._actingTimeInMouth = value;
  }

  public get profession(): ProfessionEntity {
    return this._profession;
  }

  public set profession(value: ProfessionEntity) {
    this._profession = value;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(value: number) {
    this._salary = value;
  }

  public get person(): PersonEntity {
    return this._person;
  }

  public set person(value: PersonEntity) {
    this._person = value;
  }

  public get phone(): PhoneEntity {
    return this._phone;
  }

  public set phone(value: PhoneEntity) {
    this._phone = value;
  }
}
