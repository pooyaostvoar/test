import express from "express";
import { tokenRouter } from "./tokens/router";

export const router = express.Router();
router.use("", tokenRouter);
