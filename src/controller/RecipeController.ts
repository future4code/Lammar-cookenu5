import { Request, Response } from "express"
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../model/recipe";

export class RecipeController{
    createRecipe = async (req:Request, res:Response):Promise<void> => {
        try{
            const input:RecipeInputDTO = {
                title: req.body.title,
                description: req.body.description,
                createdAt: req.body.createdAt
            };
                console.log(input)
            const recipeBusiness = new RecipeBusiness()
            await recipeBusiness.createRecipe(input);

            res.status(201).send({message: "Receita criada!"})
        }catch(error:any){
            res.status(400).send(error.message)
        }
    }
}