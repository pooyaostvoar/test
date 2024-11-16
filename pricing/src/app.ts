import express, { Express, Request, Response } from "express";

import bodyParser from "body-parser";

const app: Express = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.listen(port, () => {});

export default app;
