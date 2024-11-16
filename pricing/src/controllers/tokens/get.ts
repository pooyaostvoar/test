import express, { Request, Response } from "express";
import { getTokenById } from "../../services/token";

export const getRouter = express.Router();
getRouter.get("/:id", async (req: Request, res: Response) => {
  const tokenId = Number(req.params.id);
  const token = await getTokenById(tokenId);
  res.send(token);
});
