import { Token } from "../database/entity/token";

export interface TokenPriceAdapter {
  getAllTokens: () => Promise<Token[]>;
  getPricesByIds: (
    ids: string[]
  ) => Promise<Record<string, number | undefined>>;
}
