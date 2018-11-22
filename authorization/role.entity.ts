import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { WebsiteUser, IWebsiteUser } from './user.entity';

export interface IRole {
  id?: number;
  name: string;
  users?: IWebsiteUser[];
}
@Entity({ name: 'Roles' })
export class Role implements IRole {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @OneToMany(type => WebsiteUser, user => user.role)
  public users: WebsiteUser[];
}
