import "../init";
import request from "supertest";
import app from "../../app";
import { AppDataSource } from "../../database/datasource";
import { Token } from "../../database/entity/token";

describe("When getting token", () => {
  it("Should return the corresponding token", async () => {
    await AppDataSource.getRepository(Token).save({
      name: "Ton",
      createdAt: new Date(),
      updatedAt: new Date(),
      currentPrice: 10.2,
      externalId: "ton",
    });
    const res = await request(app).get("/tokens/1");
    expect(res.body).toEqual(
      expect.objectContaining({
        id: 1,
        name: "Ton",
        externalId: "ton",
        currentPrice: 10.2,
      })
    );
  });
});
