import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Role } from './role.entity';

export interface IWebsiteUser {
  id?: number;
  email: string;
  role?: Role;
}

@Entity()
export class WebsiteUser implements IWebsiteUser {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public email: string;

  @ManyToOne(type => Role, role => role.users, {
    eager: true,
  })
  @JoinColumn({
    name: 'role_id',
  })
  public role?: Role;
}
