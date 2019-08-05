import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AcademicInstituition } from './academic-instituition.entity';

@Entity('academic_informations')
export class AcademicInformation {
  @PrimaryGeneratedColumn('uuid', {name: 'id'})
  private _id: any;

  @Column({name: 'transferred', type: 'boolean'})
  private _isTransferred: boolean;

  @Column({name: 'high_school_formation_year', type: 'timestamp'})
  private _highSchoolFormationYear: Date;

  private _intituition: AcademicInstituition;
  private _highSchoolFormation: AcademicInformation;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get isTransferred(): boolean {
    return this._isTransferred;
  }

  public set isTransferred(value: boolean) {
    this._isTransferred = value;
  }

  public get intituition(): AcademicInstituition {
    return this._intituition;
  }

  public set intituition(value: AcademicInstituition) {
    this._intituition = value;
  }

  public get highSchoolFormationYear(): Date {
    return this._highSchoolFormationYear;
  }

  public set highSchoolFormationYear(value: Date) {
    this._highSchoolFormationYear = value;
  }

  public get highSchoolFormation(): AcademicInformation {
    return this._highSchoolFormation;
  }
  public set highSchoolFormation(value: AcademicInformation) {
    this._highSchoolFormation = value;
  }
}
