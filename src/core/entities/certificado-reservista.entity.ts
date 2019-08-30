import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('certificados_reservistas')
export class CertificadoReservistaEntity {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'valor', type: 'varchar', length: 31})
  private _valor: string;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get valor(): string {
    return this._valor;
  }

  public set valor(value: string) {
    this._valor = value;
  }
}
