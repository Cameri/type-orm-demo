import { Repository } from 'typeorm';
import { WebsiteUser } from './user.entity';
import { INwRepository } from '../generic-repository';

export class UserRepository implements INwRepository<WebsiteUser> {
  typeOrmUserRepository: Repository<WebsiteUser>;

  constructor(typeOrmUserRepository: Repository<WebsiteUser>) {
    this.typeOrmUserRepository = typeOrmUserRepository;
  }

  findById(id: number) {
    return this.typeOrmUserRepository.findOne(id);
  }
}
