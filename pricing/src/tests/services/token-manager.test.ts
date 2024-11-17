import { AppDataSource } from "../../database/datasource";
import { Token } from "../../database/entity/token";
import TokenManager from "../../services/token-manager";
import "../init";
import { MockCoinGeckoAdapter } from "./mock-tokens";

describe("When fetching and storing tokens", () => {
  it("Should save all tokens in database", async () => {
    const tokenManager = new TokenManager(new MockCoinGeckoAdapter("api-key"));
    await tokenManager.fetchAndStoreTokens();
    const savedTokens = await AppDataSource.getRepository(Token).find({});
    expect(savedTokens.length).toEqual(10);
  });
});
