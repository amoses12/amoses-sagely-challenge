import { DataSource } from "typeorm"

export const db = new DataSource({
    type: "postgres",
    host: 'host.docker.internal',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: ["src/models/*{.ts,.js}"],
    migrations: ['src/migrations/*{.ts,.js}'],
    logging: true,
    synchronize: true,
    
})