import { Controller, Post, Get, Body } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Ingredient } from 'src/entities/Ingredient';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly service: IngredientService) {}

  @Post()
  async createOne(@Body() data: Ingredient): Promise<Ingredient> {
    return await this.service.createOne(data);
  }

  @Get()
  async getMany(): Promise<Ingredient[]> {
    return await this.service.getMany();
  }
}
