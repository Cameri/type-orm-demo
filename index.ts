import { createConnection, Connection, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class WebsiteUser {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public email: string;
}

async function main() {
    const connection: Connection = await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "nestwealth",
        database: "nestwealth",
        entities: [WebsiteUser]
    });

    const UserRepository = connection.getRepository(WebsiteUser);

    const user = await UserRepository.findOne(1);

    console.log(user);

}

main().then(() => {
    console.log('done');
    process.exit(0);
})
