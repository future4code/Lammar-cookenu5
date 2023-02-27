import { CustomError } from "../error/customError";
import { Recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
 
  createRecipe = async (recipe: Recipe):Promise<void> => {
    try {
      await RecipeDatabase.connection.insert(recipe).into("Recipes_list");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }};