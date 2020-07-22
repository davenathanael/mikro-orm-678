import { Module } from '@nestjs/common';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entitiesDirs: ['dist/src/entities'],
      entitiesDirsTs: ['src/entities'],
      dbName: 'db.sqlite3',
      type: 'sqlite',
      debug: true,
    }),
    RecipeModule,
    IngredientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
