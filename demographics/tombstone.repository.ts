import { MongoRepository } from 'typeorm';

import { INwRepository } from '../generic-repository';
import { Tombstone } from './tombstone';

export class TombstoneRepository implements INwRepository<Tombstone> {
  typeOrmUserRepository: MongoRepository<Tombstone>;

  constructor(typeOrmTombstoneRepository: MongoRepository<Tombstone>) {
    this.typeOrmUserRepository = typeOrmTombstoneRepository;
  }

  findById(id: number) {
    return this.typeOrmUserRepository.findOne(id);
  }
}
