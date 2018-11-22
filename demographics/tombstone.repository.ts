import { MongoRepository } from 'typeorm';

import { INwRepository } from '../generic-repository';
import { Tombstone } from './tombstone';


/**
 * In order to abstract us from the undelying ORM implementation 
 * we can create custom entity repositories, so that we don't pollute our business layer with 
 * `typeOrmSpecificRepository` calls.
 */
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
