import { UserRepository } from './user.repository';
import { TombstoneRepository } from '../demographics/tombstone.repository';
import { IWebsiteUser } from './user.entity';
import { ITombstone } from '../demographics/tombstone';

export interface IUserInfoDto {
  user: IWebsiteUser;
  tombstone: ITombstone;
}

export class AuthorizationService {
  private userRepository: UserRepository;
  private tombstoneRepository: TombstoneRepository;
  constructor(
    userRepository: UserRepository,
    tombstoneRepository: TombstoneRepository,
  ) {
    this.tombstoneRepository = tombstoneRepository;
    this.userRepository = userRepository;
  }

  async getUserInfo(id: number): Promise<IUserInfoDto> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error('User not found');
    const tombstone = await this.tombstoneRepository.findMasterByUserId(id);
    if (!tombstone) throw new Error(`User ${id} master tombstone is missing`);

    return {
      user,
      tombstone,
    };
  }
}
