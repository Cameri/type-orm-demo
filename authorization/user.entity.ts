import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Role } from './role.entity';
import { IClient, Client } from '../accounting/client.entity';

export interface IWebsiteUser {
  id?: number;
  email: string;
  role?: Role;
  client?: IClient;
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

  @OneToOne(type => Client, {
    eager: true
  })
  @JoinColumn({
    name: 'client_id',
  })
  public client: IClient;
}
