import { Datasources } from './datasources';
import { UserRepository } from './authorization/user.repository';
import { WebsiteUser } from './authorization/user.entity';
import { TombstoneRepository } from './demographics/tombstone.repository';
import { AuthorizationService } from './authorization/authorization.service';
import { TombstoneEntity } from './demographics/tombstone.entity';

async function main() {
  const datasources = new Datasources();
  await datasources.init();
  const mysql = datasources.getMysqlConnection();
  const mongo = datasources.getMongoConnection();
  const userRepository = new UserRepository(mysql.getRepository(WebsiteUser));
  const tombstoneRepository = new TombstoneRepository(
    mongo.getMongoRepository(TombstoneEntity),
  );
  const authorizationService = new AuthorizationService(
    userRepository,
    tombstoneRepository,
  );
  const userId = 1;
  const userInfo = await authorizationService.getUserInfo(userId);
  console.log(`User info ${JSON.stringify(userInfo, null, 2)}`);
}

main()
  .then(() => {
    console.log('done');
    process.exit(0);
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
