import { Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateRecipeDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsDefined({message: 'selling_price is null'})
  @Expose({ name: 'selling_price' })
  sellingPrice?: number;
  ingredients: RecipeIngredientsDto[];
}

export class RecipeIngredientsDto {
  ingredient: number;
  amount: number;
}