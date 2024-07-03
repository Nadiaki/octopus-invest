import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 9000,
    username: "octopus",
    password: "octopus-password",
    database: "octopus",
    synchronize: true,
    logging: false,
    entities: ["./dist/entity/*.js"],
    migrations: ["./dist/database/migration/*.js"],
    subscribers: [],
})

export async function DataSourceInit() {
    await AppDataSource.initialize()
}