import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('registros_gerais')
export class RegistroGeral {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'valor', type: 'varchar', length: 9 })
  private _valor: string;

  @Column({ name: 'data_expedicao', type: 'timestamp' })
  private _dataDeExpedicao: Date;

  @Column({ name: 'orgao_expeditor', type: 'varchar', length: 31 })
  private _orgaoExpeditor: string;

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

  public get dataDeExpedicao(): Date {
    return this._dataDeExpedicao;
  }

  public set dataDeExpedicao(value: Date) {
    this._dataDeExpedicao = value;
  }

  public get orgaoExpeditor(): string {
    return this._orgaoExpeditor;
  }

  public set orgaoExpeditor(value: string) {
    this._orgaoExpeditor = value;
  }

}
