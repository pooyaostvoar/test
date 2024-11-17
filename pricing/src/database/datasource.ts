import { DataSource } from "typeorm";
import { Token } from "./entity/token";

const username = process.env.POSTGRES_USER ?? "username";
const password = process.env.POSTGRES_PASSWORD ?? "password";
const database = "pricing_db";
export const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "postgres",
        host: "localhost",
        port: 5435,
        username,
        password,
        database,
        synchronize: true,
        dropSchema: true,
        entities: [Token],
      }
    : {
        type: "postgres",
        host: "db",
        port: 5434,
        username,
        password,
        database,
        synchronize: true,
        entities: [Token],
      }
);
