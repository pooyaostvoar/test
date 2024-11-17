import CoinGeckoAdapter from "../../adapters/coin-gecko";
import { Token } from "../../database/entity/token";

export const mockTokenData = [
  { id: "01coin", symbol: "zoc", name: "01coin" },
  { id: "0chain", symbol: "zcn", name: "Zus" },
  { id: "0dog", symbol: "0dog", name: "Bitcoin Dogs" },
  {
    id: "0-knowledge-network",
    symbol: "0kn",
    name: "0 Knowledge Network",
  },
  { id: "0-mee", symbol: "ome", name: "O-MEE" },
  { id: "0vix-protocol", symbol: "vix", name: "0VIX Protocol" },
  { id: "0x", symbol: "zrx", name: "0x Protocol" },
  {
    id: "0x0-ai-ai-smart-contract",
    symbol: "0x0",
    name: "0x0.ai: AI Smart Contract",
  },
  { id: "0x678-landwolf-1933", symbol: "wolf", name: "Landwolf" },
  { id: "0xadventure", symbol: "zad", name: "0xAdventure" },
];

export const mockTokenPrices: { [keys: string]: number | undefined } = {
  "01coin": 0.00019298,
  "0chain": 0.03669887,
  "0dog": 0.00419346,
  "0-knowledge-network": 0.0002829,
  "0-mee": 0.00003373,
  "0vix-protocol": undefined,
  "0x": 0.37775,
  "0x0-ai-ai-smart-contract": 0.133556,
  "0x678-landwolf-1933": 1.57425,
  "0xadventure": 0.00000122,
};

export class MockCoinGeckoAdapter extends CoinGeckoAdapter {
  async getAllTokens(): Promise<Token[]> {
    return mockTokenData.map((coin) => ({
      externalId: coin.id,
      name: coin.name,
      currentPrice: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }

  async getPricesByIds(
    ids: string[]
  ): Promise<Record<string, number | undefined>> {
    return new Promise((resolve) => {
      resolve(mockTokenPrices);
    });
  }
}
