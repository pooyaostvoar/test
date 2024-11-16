import { AppDataSource } from "../database/datasource";
import { Token } from "../database/entity/token";

export function getTokenById(id: number) {
  return AppDataSource.getRepository(Token).findOne({
    where: { id },
  });
}
