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

  it("Should return not found if token does not exist", async () => {
    await AppDataSource.getRepository(Token).save({
      name: "Ton",
      createdAt: new Date(),
      updatedAt: new Date(),
      currentPrice: 10.2,
      externalId: "ton",
    });
    const res = await request(app).get("/tokens/2");
    expect(res.status).toEqual(404);
    expect(res.text).toEqual("Token not found!");
  });

  it("Should return 400 if id is not number", async () => {
    await AppDataSource.getRepository(Token).save({
      name: "Ton",
      createdAt: new Date(),
      updatedAt: new Date(),
      currentPrice: 10.2,
      externalId: "ton",
    });
    const res = await request(app).get("/tokens/string");
    expect(res.status).toEqual(400);

    expect(res.body).toEqual({
      message: "Validation Error",
      errors: [
        {
          code: "invalid_type",
          expected: "number",
          received: "string",
          path: ["id"],
          message: "Expected number, received string",
        },
      ],
    });
  });
});
