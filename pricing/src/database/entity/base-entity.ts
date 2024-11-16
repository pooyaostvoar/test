import { Column, Entity } from "typeorm";

@Entity()
export class BaseEntity {
  @Column({ type: "datetime" })
  createdAt: Date;

  @Column({ type: "datetime" })
  updatedAt: Date;
}
