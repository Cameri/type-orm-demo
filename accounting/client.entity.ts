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
  public email: string;

//   @OneToOne(type => WebsiteUser, user => user.client, {
//     eager: true,
//   })
//   @JoinColumn({
//     name: 'client_id',
//   })
//   public user?: IWebsiteUser;
}
