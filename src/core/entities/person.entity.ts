import { Gender } from '../enums/gender.model';
import { MaritalStatus } from '../enums/marital-status.model';
import { Breed } from '../enums/breed.model';
import { RegistroGeral } from './registro-geral.entity';
import { CadastroPessoaFisica } from './cadastro-pessoa-fisica.entity';
import { TituloEleitoral } from './titulo-eleitoral.entity';
import { CertificadoReservista } from './certificado-reservista.entity';
import { Address } from 'cluster';
import { Phone } from './phone.entity';
import { Email } from './email.entity';
import { SocialMedia } from './social-media.entity';
import { DigitalizedDocument } from './digitalized-documents.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MediaFile } from './media-file.entity';

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

  private _rg: RegistroGeral;
  private _cpf: CadastroPessoaFisica;
  private _tituloEleitoral: TituloEleitoral;
  private _certificadoReservista: CertificadoReservista;
  private _address: Address;
  private _phones: Phone[];
  private _emails: Email[];
  private _socialMedia: SocialMedia[];
  private _digitalizedDocuments: DigitalizedDocument[];
  private _perfilImage: MediaFile;

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

  public get rg(): RegistroGeral {
    return this._rg;
  }

  public set rg(value: RegistroGeral) {
    this._rg = value;
  }

  public get cpf(): CadastroPessoaFisica {
    return this._cpf;
  }

  public set cpf(value: CadastroPessoaFisica) {
    this._cpf = value;
  }

  public get tituloEleitoral(): TituloEleitoral {
    return this._tituloEleitoral;
  }

  public set tituloEleitoral(value: TituloEleitoral) {
    this._tituloEleitoral = value;
  }

  public get certificadoReservista(): CertificadoReservista {
    return this._certificadoReservista;
  }

  public set certificadoReservista(value: CertificadoReservista) {
    this._certificadoReservista = value;
  }

  public get address(): Address {
    return this._address;
  }

  public set address(value: Address) {
    this._address = value;
  }

  public get phones(): Phone[] {
    return this._phones;
  }

  public set phones(value: Phone[]) {
    this._phones = value;
  }

  public get emails(): Email[] {
    return this._emails;
  }

  public set emails(value: Email[]) {
    this._emails = value;
  }

  public get socialMedia(): SocialMedia[] {
    return this._socialMedia;
  }

  public set socialMedia(value: SocialMedia[]) {
    this._socialMedia = value;
  }

  public get digitalizedDocuments(): DigitalizedDocument[] {
    return this._digitalizedDocuments;
  }

  public set digitalizedDocuments(value: DigitalizedDocument[]) {
    this._digitalizedDocuments = value;
  }

  public get perfilImage(): MediaFile {
    return this._perfilImage;
  }

  public set perfilImage(value: MediaFile) {
    this._perfilImage = value;
  }
}
