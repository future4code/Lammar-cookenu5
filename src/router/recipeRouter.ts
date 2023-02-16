import express from 'express';
import { RecipeController } from '../controller/RecipeController';

const recipeController=new RecipeController();
export const recipeRouter=express.Router();

recipeRouter.post("/createRecipe", recipeController.createRecipe)