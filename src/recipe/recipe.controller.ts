import { Controller, Post, Body, Get } from '@nestjs/common';
import { Recipe } from 'src/entities/Recipe';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly service: RecipeService) {}

  @Post()
  async createOne(@Body() data: Recipe): Promise<Recipe> {
    return await this.service.createOne(data);
  }

  @Get()
  async getMany(): Promise<Recipe[]> {
    return await this.service.getMany();
  }
}
