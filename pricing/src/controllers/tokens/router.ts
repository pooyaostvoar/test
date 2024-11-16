import express from "express";
import { getRouter } from "./get";

export const tokenRouter = express.Router();
tokenRouter.use("/tokens", getRouter);
