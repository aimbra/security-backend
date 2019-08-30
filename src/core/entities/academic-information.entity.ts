import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AcademicInstituition } from './academic-instituition.entity';

@Entity('academic_informations')
export class AcademicInformationEntity {
  @PrimaryGeneratedColumn('uuid', {name: 'id'})
  private _id: any;

  @Column({name: 'transferred', type: 'boolean'})
  private _isTransferred: boolean;

  @Column({name: 'high_school_formation_year', type: 'timestamp'})
  private _highSchoolFormationYear: Date;

  private _instituition: AcademicInstituition;
  private _highSchoolFormation: AcademicInformationEntity;

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

  public get instituition(): AcademicInstituition {
    return this._instituition;
  }

  public set instituition(value: AcademicInstituition) {
    this._instituition = value;
  }

  public get highSchoolFormationYear(): Date {
    return this._highSchoolFormationYear;
  }

  public set highSchoolFormationYear(value: Date) {
    this._highSchoolFormationYear = value;
  }

  public get highSchoolFormation(): AcademicInformationEntity {
    return this._highSchoolFormation;
  }
  public set highSchoolFormation(value: AcademicInformationEntity) {
    this._highSchoolFormation = value;
  }
}
