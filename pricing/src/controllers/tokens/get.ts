import express, { Request, Response } from "express";
import { getTokenById } from "../../services/token";
import validator from "../../middlewares/validator";
import { getTokenByIdSchema } from "../../schemas/token";

export const getRouter = express.Router();

getRouter.get(
  "/:id",
  validator({ params: getTokenByIdSchema }),
  async (req: Request, res: Response) => {
    const tokenId = req.parsedReq.params.id;

    const token = await getTokenById(tokenId);
    if (!token) {
      res.status(404).send("Token not found!");
      return;
    }

    res.send(token);
  }
);
