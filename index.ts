import { createConnection, Connection, Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity()
class WebsiteUser {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public email: string;
}

@Entity({
    name: 'tombstones'
})
class Tombstone {
    @ObjectIdColumn()
    public id?: ObjectID;

    @Column()
    public email: string;

    @Column()
    public AHEmail: string;

}

async function main() {
    const mysqlConnection: Connection = await createConnection({
        name: 'mysql',
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'nestwealth',
        database: 'nestwealth',
        entities: [WebsiteUser]
    });

    const mongoConnection: Connection = await createConnection({
        name: 'mongodb',
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'nestwealth',
        useNewUrlParser: true,
        entities: [Tombstone]
    });

    const UserRepository = mysqlConnection.getRepository(WebsiteUser);
    const user = await UserRepository.findOne({
        id: 1
    });
    if (!user) return;

    const TombstoneRepository = mongoConnection.getMongoRepository(Tombstone);

    const [tombstone] = await TombstoneRepository.findByIds([new ObjectID('5841d8f3f3f0e7581c7bca54')]);

    console.log(user);
    console.log(tombstone);
}

main()
    .then(() => {
        console.log('done');
        process.exit(0);
    }).catch(e => {
        console.error(e);
        process.exit(1);
    })
