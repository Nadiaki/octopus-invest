import "reflect-metadata";
import { DataSource } from "typeorm";
import { Course, User } from "../entity";

export const AppDataSource = new DataSource({
    type: 'mongodb',
    host: 'localhost',
    port: 9000,
    username: 'octopus',
    password: 'octopus-password',
    database: 'octopus',
    synchronize: true,
    logging: false,
    entities: [Course, User],
    migrations: ["./backend/dist/database/migration/*.js"],
    subscribers: [],
});