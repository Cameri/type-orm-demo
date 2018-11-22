import { Entity } from 'typeorm';
import { ObjectID } from 'mongodb';

export interface ITombstone {
  id?: ObjectID;
  AHEmail: string;
  website_user_id: string;
}

export class Tombstone implements ITombstone {
  public id?: ObjectID;
  public AHEmail: string;
  public website_user_id: string;
}
