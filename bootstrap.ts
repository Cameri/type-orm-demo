import { Datasources } from './datasources';
import { UserRepository } from './authorization/user.repository';
import { WebsiteUser } from './authorization/user.entity';
import { TombstoneRepository } from './demographics/tombstone.repository';
import { AuthorizationService } from './authorization/authorization.service';
import { TombstoneEntity } from './demographics/tombstone';

/**
 * In a real project this function will be broken down to
 * corresponding components, responsible for app wiring
 */
export async function bootstrap() {
  const datasources = new Datasources();
  // wait for all DB connections
  await datasources.init();
  const mysql = datasources.getMysqlConnection();
  const mongo = datasources.getMongoConnection();
  // wire up repositories and services, this would normally be done thru dependency injection
  const userRepository = new UserRepository(mysql.getRepository(WebsiteUser));
  const tombstoneRepository = new TombstoneRepository(
    mongo.getMongoRepository(TombstoneEntity),
  );
  const authorizationService = new AuthorizationService(
    userRepository,
    tombstoneRepository,
  );
  return {
    authorizationService,
  };
}
