import { AppDataSource } from "../../database/datasource";
import { Token } from "../../database/entity/token";
import TokenManager from "../../services/token-manager";
import "../init";
import { MockCoinGeckoAdapter, mockTokenPrices } from "./mock-tokens";

describe("When fetching and storing tokens", () => {
  it("Should save all tokens in database", async () => {
    const tokenManager = new TokenManager(new MockCoinGeckoAdapter("api-key"));
    await tokenManager.fetchAndStoreTokens();
    const savedTokens = await AppDataSource.getRepository(Token).find({});
    expect(savedTokens.length).toEqual(10);
  });

  it("Should update the tokens price correctly", async () => {
    const tokenManager = new TokenManager(new MockCoinGeckoAdapter("api-key"));
    await tokenManager.fetchAndStoreTokens();
    await tokenManager.updatePrices();
    const savedTokens = await AppDataSource.getRepository(Token).find({});
    savedTokens.forEach((token) => {
      expect(token.currentPrice).toEqual(
        mockTokenPrices[token.externalId] ?? null
      );
    });
  });
});
