import { AcademicInformationEntity } from './academic-information.entity';
import { PersonEntity } from './person.entity';
import { Entity, Column } from 'typeorm';

@Entity('students')
export class Student extends PersonEntity {

  private _academicInformation: AcademicInformationEntity;

  @Column({ name: 'registration_id', type: 'varchar', length: 31 })
  private _registrationId: any;

  public get academicInformation(): AcademicInformationEntity {
    return this._academicInformation;
  }

  public set academicInformation(value: AcademicInformationEntity) {
    this._academicInformation = value;
  }

  public get registrationId(): any {
    return this._registrationId;
  }

  public set registrationId(value: any) {
    this._registrationId = value;
  }
}
