import request from "supertest";
import app from "../app";

describe("When getting token", () => {
  it("Should return the corresponding token", async () => {
    const res = await request(app).get("/");
  });
});
