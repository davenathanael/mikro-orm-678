import { PrimaryKey, Property, Entity } from "mikro-orm";

@Entity()
export class Ingredient {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;
}