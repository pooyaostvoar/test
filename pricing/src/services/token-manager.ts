import { TokenPriceAdapter } from "../adapters/token-adapter";
import { AppDataSource } from "../database/datasource";
import { Token } from "../database/entity/token";

class TokenManager {
  private adapter: TokenPriceAdapter;

  constructor(adapter: TokenPriceAdapter) {
    this.adapter = adapter;
  }

  async fetchAndStoreTokens(): Promise<Token[]> {
    try {
      const tokens = await this.adapter.getAllTokens();
      const tokenRepository = AppDataSource.getRepository(Token);
      const batchSize = 100;
      const savedTokens: Token[] = [];

      for (let i = 0; i < tokens.length; i += batchSize) {
        const tokenBatch = tokens.slice(i, i + batchSize);
        const savedBatch = await tokenRepository.save(tokenBatch);
        savedTokens.push(...savedBatch);
      }

      return savedTokens;
    } catch (error) {
      throw new Error("Failed to fetch and store tokens.");
    }
  }
}

export default TokenManager;
