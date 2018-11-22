import { EntitySchema } from 'typeorm';
import { ObjectID } from 'mongodb';

export interface ITombstone {
  id?: ObjectID;
  AHEmail: string;
  website_user_id: string;
}

/**
 * TypeORM allows us to separarte the model from 
 * ORM specific entity declaration.
 */

 /**
  * A simple class representing the Model
  */
export class Tombstone implements ITombstone {
  public id?: ObjectID;
  public AHEmail: string;
  public website_user_id: string;
}

/**
  * ORM specific entity implementation
  */
export const TombstoneEntity = new EntitySchema<Tombstone>({
  name: 'tombstones',
  columns: {
    id: {
      //
      type: String,
      objectId: true,
      primary: true,
    },
    AHEmail: {
      type: String,
    },
  },
});
