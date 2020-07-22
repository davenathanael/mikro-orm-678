import { PrimaryKey, ManyToOne, Property, Entity } from "mikro-orm";
import { Recipe } from "./Recipe";
import { Ingredient } from "./Ingredient";

@Entity()
export class IngredientRecipeUsage {
  @PrimaryKey()
  id!: number;

  @ManyToOne()
  recipe!: Recipe;

  @ManyToOne()
  ingredient!: Ingredient;

  @Property()
  amount!: number;
}