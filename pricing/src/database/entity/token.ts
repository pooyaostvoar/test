import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base-entity";

@Entity()
export class Token extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar", length: 200 })
  name: string;

  @Column({ type: "varchar", length: 200 })
  externalId: string;

  @Column({ type: "decimal", precision: 20, scale: 10, nullable: true })
  currentPrice: number | null;
}
