import { PrimaryKey, Property, OneToMany, Collection, wrap, Entity, AnyEntity } from "mikro-orm";
import { IngredientRecipeUsage } from "./IngredientRecipeUsage";
import { IsDefined, IsString, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

@Entity()
export class Recipe {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @OneToMany({
    entity: () => IngredientRecipeUsage,
    orphanRemoval: true,
    eager: true,
  })
  ingredients = new Collection<IngredientRecipeUsage>(this);

  @Property()
  sellingPrice?: number;

  constructor(data?: Partial<Recipe>) {
    if (data) {
      console.log('wrapping data');
      wrap(this).assign(data);
    }
  }

  toJSON(strict = true, strip = [], ...args: any[]): { [p: string]: any } {
    const o = wrap(this).toObject(...args); // do not forget to pass rest params here

    if (strict) {
      strip.forEach(k => delete o[k]);
    }
    o['selling_price'] = o.sellingPrice
    delete o.sellingPrice

    return o;
  }
}