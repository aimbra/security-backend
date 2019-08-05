import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MediaFile } from './media-file.entity';

@Entity('digitalized_documents')
export class DigitalizedDocument {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'reference_name', type: 'varchar', length: 63 })
  private _referenceName: string;

  private _mediaFile: MediaFile;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get referenceName(): string {
    return this._referenceName;
  }

  public set referenceName(value: string) {
    this._referenceName = value;
  }

  public get mediaFile(): MediaFile {
    return this._mediaFile;
  }

  public set mediaFile(value: MediaFile) {
    this._mediaFile = value;
  }

}
