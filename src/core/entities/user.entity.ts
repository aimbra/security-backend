import { Person } from './person.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {

  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'username', type: 'varchar', length: 63 })
  private _username: string;

  private _person: Person;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get person(): Person {
    return this._person;
  }

  public set person(value: Person) {
    this._person = value;
  }
}
