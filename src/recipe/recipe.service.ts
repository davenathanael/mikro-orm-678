import { Injectable } from '@nestjs/common';
import { InjectRepository } from 'nestjs-mikro-orm';
import { Recipe } from 'src/entities/Recipe';
import { EntityRepository, EntityData, wrap, MikroORM } from 'mikro-orm';
import { CreateRecipeDto } from './create-recipe.dto';
import { IngredientRecipeUsage } from 'src/entities/IngredientRecipeUsage';
import { Ingredient } from 'src/entities/Ingredient';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe) private readonly repo: EntityRepository<Recipe>,
    @InjectRepository(Ingredient) private readonly ingredientRepo: EntityRepository<Ingredient>,
    private readonly orm: MikroORM,
  ) {}

  async createOne(dto: CreateRecipeDto): Promise<Recipe> {
    const recipe = new Recipe();
    recipe.name = dto.name;
    recipe.sellingPrice = dto.sellingPrice;
    
    const ingredients = await Promise.all(dto.ingredients.map(async (u) => {
      const usage = new IngredientRecipeUsage();
      usage.amount = u.amount;
      usage.ingredient = await this.ingredientRepo.findOneOrFail({ id: u.ingredient });
      return usage;
    }));

    console.log(ingredients);
    recipe.ingredients.add(...ingredients);

    console.log('created recipe:');
    console.log(recipe);
    await this.repo.persistAndFlush(recipe);
    return recipe;
  }

  async getMany(): Promise<Recipe[]> {
    return await this.repo.findAll({ populate: true });
  }

  async getOne(id: number): Promise<Recipe> {
    return await this.repo.findOne({id}, true)
  }
}
