import { IWebsiteUser } from './user.entity';
import { ITombstone } from '../demographics/tombstone.entity';
import { Repository, MongoRepository } from 'typeorm';

export interface IUserInfoDto {
  user: IWebsiteUser;
  tombstone: ITombstone;
}

/**
 * A business layer service responsible for high level operations
 */
export class AuthorizationService {
  private userRepository: Repository<IWebsiteUser>;
  private tombstoneRepository: MongoRepository<ITombstone>;
  constructor(
    userRepository: Repository<IWebsiteUser>,
    /**
     * `tombstoneRepository` can be replaced with a tombstoneService 
     * that could be a microservice or a local module
     */
    tombstoneRepository: MongoRepository<ITombstone>, 
  ) {
    this.tombstoneRepository = tombstoneRepository;
    this.userRepository = userRepository;
  }

  /**
   * This method demostrates cross-db querying.
   */
  async getUserInfo(id: number): Promise<IUserInfoDto> {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new Error('User not found');
    const tombstone = await this.tombstoneRepository.findOne({
      where: {
        website_user_id: id
      }
    });
    if (!tombstone) throw new Error(`User ${id} master tombstone is missing`);

    return {
      user,
      tombstone,
    };
  }
}
