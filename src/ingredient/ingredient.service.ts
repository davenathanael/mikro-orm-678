import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/entities/Ingredient';
import { InjectRepository } from 'nestjs-mikro-orm';
import { EntityRepository } from 'mikro-orm';

@Injectable()
export class IngredientService {
  constructor(@InjectRepository(Ingredient) private readonly repo: EntityRepository<Ingredient>) {}

  async createOne(data: Ingredient): Promise<Ingredient> {
    const recipe = this.repo.create(data);
    await this.repo.persistAndFlush(recipe);
    return recipe;
  }

  async getMany(): Promise<Ingredient[]> {
    return await this.repo.findAll({ populate: true });
  }
}
