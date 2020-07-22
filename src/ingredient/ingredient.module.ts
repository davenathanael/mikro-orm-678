import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { Ingredient } from 'src/entities/Ingredient';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Ingredient] })],
  controllers: [IngredientController],
  providers: [IngredientService]
})
export class IngredientModule {}
