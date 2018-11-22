import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class WebsiteUser {
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
  public role: Role;
}
