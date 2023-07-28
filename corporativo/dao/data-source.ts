import "reflect-metadata"
import { DataSource } from "typeorm"

export const CorporativoDataSource = new DataSource({
    type: "oracle",
    host: process.env.CORPORATIVO_DB_HOST,
    port: 1539,
    username: process.env.CORPORATIVO_DB_USER,
    password: process.env.CORPORATIVO_DB_PASS,
    database: process.env.CORPORATIVO_DB_NAME,
    synchronize: false,
    logging: false,
    entities: [`${__dirname}/entity/*[.ts,.js]`],
    migrations: [`${__dirname}/migration/*[.ts,.js]`],
    subscribers: [],
})
