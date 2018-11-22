import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';

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
}
