import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('storage_media_files')
export class MediaFileEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  private _id: any;

  @Column({ name: 'path', type: 'varchar', length: 31 })
  private _path: string;

  @Column({ name: 'title', type: 'varchar', length: 63 })
  private _name: string;

  @Column({ name: 'type', type: 'varchar', length: 63 })
  private _type: string;

  public get id(): any {
    return this._id;
  }
  public set id(value: any) {
    this._id = value;
  }
  public get path(): string {
    return this._path;
  }
  public set path(value: string) {
    this._path = value;
  }
  public get name_1(): string {
    return this._name;
  }
  public set name_1(value: string) {
    this._name = value;
  }
  public get type_1(): string {
    return this._type;
  }
  public set type_1(value: string) {
    this._type = value;
  }
}
