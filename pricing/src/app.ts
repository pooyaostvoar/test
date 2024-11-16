import express, { Express } from "express";

import bodyParser from "body-parser";
import { AppDataSource } from "./database/datasource";
import { router } from "./controllers/router";

const app: Express = express();
const port = 3000;

async function initApp() {
  const isTesting = process.env.NODE_ENV === "test";
  if (!isTesting) {
    await AppDataSource.initialize();
  }
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("", router);
  app.listen(port, () => {});
}

initApp();

export default app;
