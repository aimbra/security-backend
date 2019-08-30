import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { Gender } from '../enums/gender.model';
import { MaritalStatus } from '../enums/marital-status.model';
import { Breed } from '../enums/breed.model';
import { RegistroGeralEntity } from './registro-geral.entity';
import { CadastroPessoaFisicaEntity } from './cadastro-pessoa-fisica.entity';
import { TituloEleitoralEntity } from './titulo-eleitoral.entity';
import { CertificadoReservistaEntity } from './certificado-reservista.entity';
import { PhoneEntity } from './phone.entity';
import { EmailEntity } from './email.entity';
import { SocialMediaEntity } from './social-media.entity';
import { DigitalizedDocumentEntity } from './digitalized-documents.entity';
import { MediaFileEntity } from './media-file.entity';
import { AddressEntity } from './address.entity';

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'fullname', type: 'varchar', length: 255 })
  private _fullname: string;

  @Column({ name: 'birthday', type: 'timestamp' })
  private _birthday: Date;

  @Column({ name: 'mother_name', type: 'varchar', length: 255 })
  private _motherName: string;

  @Column({ name: 'father_name', type: 'varchar', length: 255 })
  private _fatherName: string;

  @Column({ name: 'disabled', type: 'boolean' })
  private _isDisabled: boolean;

  @Column({ name: 'genrer', type: 'varchar', length: 31 })
  private _genrer: Gender;

  @Column({ name: 'marital_status', type: 'varchar', length: 31 })
  private _maritalStatus: MaritalStatus;

  @Column({ name: 'breed', type: 'varchar', length: 31 })
  private _breed: Breed;

  private _rg: RegistroGeralEntity;
  private _cpf: CadastroPessoaFisicaEntity;
  private _tituloEleitoral: TituloEleitoralEntity;
  private _certificadoReservista: CertificadoReservistaEntity;
  private _address: AddressEntity;
  private _phones: PhoneEntity[];
  private _emails: EmailEntity[];
  private _socialMedia: SocialMediaEntity[];
  private _digitalizedDocuments: DigitalizedDocumentEntity[];
  private _perfilImage: MediaFileEntity;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get fullname(): string {
    return this._fullname;
  }

  public set fullname(value: string) {
    this._fullname = value;
  }

  public get genrer(): Gender {
    return this._genrer;
  }

  public set genrer(value: Gender) {
    this._genrer = value;
  }

  public get birthday(): Date {
    return this._birthday;
  }

  public set birthday(value: Date) {
    this._birthday = value;
  }

  public get motherName(): string {
    return this._motherName;
  }

  public set motherName(value: string) {
    this._motherName = value;
  }

  public get fatherName(): string {
    return this._fatherName;
  }

  public set fatherName(value: string) {
    this._fatherName = value;
  }

  public get isDisabled(): boolean {
    return this._isDisabled;
  }

  public set isDisabled(value: boolean) {
    this._isDisabled = value;
  }

  public get maritalStatus(): MaritalStatus {
    return this._maritalStatus;
  }

  public set maritalStatus(value: MaritalStatus) {
    this._maritalStatus = value;
  }

  public get breed(): Breed {
    return this._breed;
  }

  public set breed(value: Breed) {
    this._breed = value;
  }

  public get rg(): RegistroGeralEntity {
    return this._rg;
  }

  public set rg(value: RegistroGeralEntity) {
    this._rg = value;
  }

  public get cpf(): CadastroPessoaFisicaEntity {
    return this._cpf;
  }

  public set cpf(value: CadastroPessoaFisicaEntity) {
    this._cpf = value;
  }

  public get tituloEleitoral(): TituloEleitoralEntity {
    return this._tituloEleitoral;
  }

  public set tituloEleitoral(value: TituloEleitoralEntity) {
    this._tituloEleitoral = value;
  }

  public get certificadoReservista(): CertificadoReservistaEntity {
    return this._certificadoReservista;
  }

  public set certificadoReservista(value: CertificadoReservistaEntity) {
    this._certificadoReservista = value;
  }

  public get address(): AddressEntity {
    return this._address;
  }

  public set address(value: AddressEntity) {
    this._address = value;
  }

  public get phones(): PhoneEntity[] {
    return this._phones;
  }

  public set phones(value: PhoneEntity[]) {
    this._phones = value;
  }

  public get emails(): EmailEntity[] {
    return this._emails;
  }

  public set emails(value: EmailEntity[]) {
    this._emails = value;
  }

  public get socialMedia(): SocialMediaEntity[] {
    return this._socialMedia;
  }

  public set socialMedia(value: SocialMediaEntity[]) {
    this._socialMedia = value;
  }

  public get digitalizedDocuments(): DigitalizedDocumentEntity[] {
    return this._digitalizedDocuments;
  }

  public set digitalizedDocuments(value: DigitalizedDocumentEntity[]) {
    this._digitalizedDocuments = value;
  }

  public get perfilImage(): MediaFileEntity {
    return this._perfilImage;
  }

  public set perfilImage(value: MediaFileEntity) {
    this._perfilImage = value;
  }
}
