import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('federate_units')
export class FederateUnitEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'name', type: 'varchar', length: 63 })
  private _name: string;

  @Column({ name: 'name', type: 'varchar', length: 3 })
  private _initials: string;

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

  public get initials(): string {
    return this._initials;
  }

  public set initials(value: string) {
    this._initials = value;
  }

}
