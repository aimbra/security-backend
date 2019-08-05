import { SocialMediaType } from '../enums/social-media-type.model';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('social_medias')
export class SocialMedia {

  @PrimaryGeneratedColumn('uuid')
  private _id: any;

  @Column({ name: 'link', type: 'varchar', length: 127 })
  private _link: string;

  @Column({ name: 'social_media_type', type: 'varchar', length: 63 })
  private _socialMediaType: SocialMediaType;

  public get id(): any {
    return this._id;
  }

  public set id(value: any) {
    this._id = value;
  }

  public get link(): string {
    return this._link;
  }

  public set link(value: string) {
    this._link = value;
  }

  public get socialMediaType(): SocialMediaType {
    return this._socialMediaType;
  }

  public set socialMediaType(value: SocialMediaType) {
    this._socialMediaType = value;
  }

}
