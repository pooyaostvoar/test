import CoinGeckoAdapter from "../../adapters/coin-gecko";
import { Token } from "../../database/entity/token";

const mockTokenData = [
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
}
