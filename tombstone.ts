import { Entity, Column, ObjectIdColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectID } from 'mongodb';
import { WebsiteUser } from './user';

@Entity({
  name: 'tombstones',
})
export class Tombstone {
  @ObjectIdColumn()
  public id?: ObjectID;

  @Column()
  public email: string;

  @Column()
  public AHEmail: string;

  @ManyToOne(type => WebsiteUser, user => user.tombstones)
  @JoinColumn({ name: 'website_user_id' })
  public user: WebsiteUser;
}
