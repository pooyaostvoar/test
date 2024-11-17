import { Request, Response, NextFunction, query } from "express";
import { z, ZodError } from "zod";

type ZodSchema =
  | z.ZodObject<any>
  | z.ZodArray<any>
  | z.ZodString
  | z.ZodNumber
  | z.ZodBoolean;

const validator = (validators: {
  body?: ZodSchema;
  query?: ZodSchema;
  params?: ZodSchema;
}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.parsedReq = {};
      ["body", "query", "params"].forEach((key) => {
        if (validators[key as keyof typeof validators]) {
          const schema = validators[key as keyof typeof validators];
          const parsedData = schema?.parse(req[key as keyof typeof req]);
          req.parsedReq[key] = parsedData;
        }
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Validation Error",
          errors: error.errors,
        });
      } else {
        next(error);
      }
    }
  };
};

export default validator;
