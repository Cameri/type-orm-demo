import { Connection, createConnection } from 'typeorm';
import { TombstoneEntity } from './demographics/tombstone.entity';

export class Datasources {
  mysql: Connection;
  mongo: Connection;

  async init() {
    const mysqlConnectionPromise = createConnection({
      name: 'mysql',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'nestwealth',
      database: 'nestwealth',
      // entities can be located by glob patterns
      entities: ['./authorization/*.entity.ts'],
    });

    const mongoConnectionPromise = createConnection({
      name: 'mongodb',
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'nestwealth',
      useNewUrlParser: true,
      // or imported explicitly
      entities: [TombstoneEntity],
    });

    const [mysql, mongo] = await Promise.all([
      mysqlConnectionPromise,
      mongoConnectionPromise,
    ]);
    this.mysql = mysql;
    this.mongo = mongo;
  }

  getMysqlConnection() {
    return this.mysql;
  }
  getMongoConnection() {
    return this.mongo;
  }
}
