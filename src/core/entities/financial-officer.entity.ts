import { Profession } from './profession.entity';
import { Person } from './person.entity';
import { Phone } from './phone.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Company } from './company.entity';

@Entity('finacial_officers')
export class FinancialOfficer {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'acting_time_in_mouth', type: 'smallint' })
  private _actingTimeInMouth: number;

  @Column({ name: 'salary', type: 'numeric' })
  private _salary: number;

  private _profession: Profession;
  private _company: Company;
  private _person: Person;
  private _phone: Phone;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get company(): Company {
    return this._company;
  }

  public set company(value: Company) {
    this._company = value;
  }

  public get actingTimeInMouth(): number {
    return this._actingTimeInMouth;
  }

  public set actingTimeInMouth(value: number) {
    this._actingTimeInMouth = value;
  }

  public get profession(): Profession {
    return this._profession;
  }

  public set profession(value: Profession) {
    this._profession = value;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(value: number) {
    this._salary = value;
  }

  public get person(): Person {
    return this._person;
  }

  public set person(value: Person) {
    this._person = value;
  }

  public get phone(): Phone {
    return this._phone;
  }

  public set phone(value: Phone) {
    this._phone = value;
  }
}
