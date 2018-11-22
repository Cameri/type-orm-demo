import { Datasources } from './datasources';

async function main() {
  const datasources = new Datasources();
  await datasources.init();
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
