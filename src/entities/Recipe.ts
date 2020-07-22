import { PrimaryKey, Property, OneToMany, Collection, wrap, Entity } from "mikro-orm";
import { Expose } from 'class-transformer';
import { IngredientRecipeUsage } from "./IngredientRecipeUsage";

@Entity()
export class Recipe {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Expose({ name: 'ingredient_usage' })
  @OneToMany({
    entity: () => IngredientRecipeUsage,
    mappedBy: 'recipe',
    orphanRemoval: true,
    eager: true,
  })
  ingredients = new Collection<IngredientRecipeUsage>(this);

  constructor(data?: Partial<Recipe>) {
    if (data) {
      console.log('wrapping data');
      wrap(this).assign(data);
    }
  }
}