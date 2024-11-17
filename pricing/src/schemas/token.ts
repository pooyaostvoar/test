import { z } from "zod";

export const getTokenByIdSchema = z.object({
  id: z.preprocess((value) => {
    const parsedValue =
      typeof value === "string" ? parseInt(value) : (value as number);
    return isNaN(parsedValue) ? value : parsedValue;
  }, z.number()),
});
