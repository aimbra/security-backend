import { AcademicInformation } from './academic-information.entity';
import { Person } from './person.entity';
import { Entity, Column } from 'typeorm';

@Entity('students')
export class Student extends Person {

  private _academicInformation: AcademicInformation;

  @Column({ name: 'registration_id', type: 'varchar', length: 31 })
  private _registrationId: any;

  public get academicInformation(): AcademicInformation {
    return this._academicInformation;
  }

  public set academicInformation(value: AcademicInformation) {
    this._academicInformation = value;
  }

  public get registrationId(): any {
    return this._registrationId;
  }

  public set registrationId(value: any) {
    this._registrationId = value;
  }
}
