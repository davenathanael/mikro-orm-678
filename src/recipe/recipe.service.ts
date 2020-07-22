import { Injectable } from '@nestjs/common';
import { InjectRepository } from 'nestjs-mikro-orm';
import { Recipe } from 'src/entities/Recipe';
import { EntityRepository } from 'mikro-orm';

@Injectable()
export class RecipeService {
  constructor(@InjectRepository(Recipe) private readonly repo: EntityRepository<Recipe>) {}

  async createOne(data: Recipe): Promise<Recipe> {
    console.log("data:")
    console.log(data);
    const recipe = this.repo.create(data);
    console.log("created recipe:")
    console.log(recipe)
    await this.repo.persistAndFlush(recipe);
    return recipe;
  }

  async getMany(): Promise<Recipe[]> {
    return await this.repo.findAll({ populate: true });
  }
}
