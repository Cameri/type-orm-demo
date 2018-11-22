import { EntitySchema } from 'typeorm';
import { Tombstone } from './tombstone';
import { ObjectID } from 'mongodb';

export const TombstoneEntity = new EntitySchema<Tombstone>({
  name: 'tombstones',
  columns: {
    id: {
      type: String,
      objectId: true,
      primary: true,
    },
    AHEmail: {
      type: String,
    },
  },
});
