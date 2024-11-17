import cron from "node-cron";
import TokenManager from "./services/token-manager";
import CoinGeckoAdapter from "./adapters/coin-gecko";
import { AppDataSource } from "./database/datasource";

const apiKey = process.env.CONIN_GECKO_API_KEY ?? "";
const tokenManager = new TokenManager(new CoinGeckoAdapter(apiKey));
AppDataSource.initialize();
cron.schedule("*/1 * * * *", async () => {
  console.log("Running the token update task...");
  try {
    await tokenManager.fetchAndStoreTokens();
    await tokenManager.updatePrices();
    console.log("Token update completed successfully.");
  } catch (error) {
    console.error("Error during token update task:", error);
  }
});
