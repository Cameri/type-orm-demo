import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tombstone } from './tombstone';

@Entity()
export class WebsiteUser {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public email: string;

  @OneToMany(type => Tombstone, tombstone => tombstone.user)
  public tombstones: Tombstone;
}
