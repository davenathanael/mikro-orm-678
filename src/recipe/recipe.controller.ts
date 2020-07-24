import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Recipe } from 'src/entities/Recipe';
import { RecipeService } from './recipe.service';
import { MikroORM } from 'mikro-orm';
import { CreateRecipeDto } from './create-recipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly service: RecipeService, private readonly orm: MikroORM) {}

  @Post()
  async createOne(@Body() dto: CreateRecipeDto): Promise<Recipe> {
    // data = this.orm.em.getDriver().mapResult(data, this.orm.em.getMetadata().get(Recipe.name));
    console.log('[constructor] dto:');
    console.log(dto);
    return await this.service.createOne(dto);
  }

  @Get()
  async getMany(): Promise<Recipe[]> {
    return await this.service.getMany();
  }

  @Get(':id')
  async getOne(@Param() id: number): Promise<Recipe> {
    return await this.service.getOne(id);
  }
}
