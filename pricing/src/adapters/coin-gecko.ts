import { Token } from "../database/entity/token";
import { TokenPriceAdapter } from "./token-adapter";

class CoinGeckoAdapter implements TokenPriceAdapter {
  private readonly BASE_URL = "https://api.coingecko.com/api/v3";
  private apiKey: string | null;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async fetchFromAPI<T>(
    endpoint: string,
    params: Record<string, string>
  ): Promise<T> {
    const url = new URL(`${this.BASE_URL}${endpoint}`);
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value)
    );

    const headers: Record<string, string> = {};
    if (this.apiKey) {
      headers["Authorization"] = `Bearer ${this.apiKey}`;
    }

    const response = await fetch(url.toString(), { headers });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch from CoinGecko API: ${response.statusText}`
      );
    }

    return response.json();
  }

  async getAllTokens(): Promise<Token[]> {
    const data = await this.fetchFromAPI<
      {
        id: string;
        symbol: string;
        name: string;
      }[]
    >("/coins/list", {});

    return data.map((coin) => ({
      externalId: coin.id,
      name: coin.name,
      currentPrice: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }

  async getPricesByIds(
    ids: string[]
  ): Promise<{ [id: string]: number | undefined }> {
    if (!ids.length) {
      return {};
    }

    const params = {
      ids: ids.join(","),
      vs_currencies: "usd",
    };

    const data = await this.fetchFromAPI<Record<string, { usd: number }>>(
      "/simple/price",
      params
    );

    const prices: { [id: string]: number } = {};
    for (const id of Object.keys(data)) {
      prices[id] = data[id].usd;
    }

    return prices;
  }
}

export default CoinGeckoAdapter;
