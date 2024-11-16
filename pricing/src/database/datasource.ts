import { DataSource } from "typeorm";
import { Token } from "./entity/token";

const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
export const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        name: "default",
        type: "better-sqlite3",
        database: ":memory:",
        entities: [Token],
        synchronize: true,
        dropSchema: true,
      }
    : {
        type: "postgres",
        host: "db",
        port: 5434,
        username,
        password,
        database: "pricing_db",
        synchronize: true,
        entities: [Token],
      }
);
