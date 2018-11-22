import { MongoRepository } from 'typeorm';

import { INwRepository } from '../generic-repository';
import { Tombstone } from './tombstone';

export class TombstoneRepository implements INwRepository<Tombstone> {
  typeOrmUserRepository: MongoRepository<Tombstone>;

  constructor(typeOrmTombstoneRepository: MongoRepository<Tombstone>) {
    this.typeOrmUserRepository = typeOrmTombstoneRepository;
  }

  findById(id: string | number): Promise<Tombstone | undefined> {
    throw new Error('Method not implemented.');
  }

  findMasterByUserId(userId: number) {
    return this.typeOrmUserRepository.findOne({
      where: {
        website_user_id: userId,
      },
    });
  }
}
