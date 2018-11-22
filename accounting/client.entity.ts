import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { IWebsiteUser, WebsiteUser } from '../authorization/user.entity';

export interface IClient {
  id?: string;
  custodian_id?: string;
  user?: IWebsiteUser;
}

@Entity('Clients')
export class Client implements IClient {
  @PrimaryGeneratedColumn()
  public id?: string;

  @Column()
  public custodian_id: string;

  @OneToOne(() => WebsiteUser, user => user.client)
  public user?: IWebsiteUser;
}
