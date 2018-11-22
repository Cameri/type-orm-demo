import { bootstrap } from './bootstrap';

async function main() {
  const { authorizationService } = await bootstrap();
  const userId = 1;
  const userInfo = await authorizationService.getUserInfo(userId);
  console.log(`User info ${JSON.stringify(userInfo, null, 2)}`);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
