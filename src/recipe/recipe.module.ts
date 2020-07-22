import { Module } from '@nestjs/common';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { Recipe } from 'src/entities/Recipe';
import { IngredientRecipeUsage } from 'src/entities/IngredientRecipeUsage';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Recipe, IngredientRecipeUsage] })],
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}
