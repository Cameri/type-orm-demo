import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { WebsiteUser } from './user';

@Entity({ name: 'Roles' })
export class Role {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @OneToMany(type => WebsiteUser, user => user.role)
  public users: WebsiteUser;
}
