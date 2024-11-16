import { Column, Entity } from "typeorm";

@Entity()
export class BaseEntity {
  @Column({ type: "timestamptz" })
  createdAt: Date;

  @Column({ type: "timestamptz" })
  updatedAt: Date;
}
