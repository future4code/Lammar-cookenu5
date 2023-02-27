
import { IdGenerator } from "../services/IdGenerator"
import { CustomError, Unauthorized } from "../error/customError";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe, RecipeInputDTO } from "../model/recipe";
import { Authenticator } from "../services/Authenticator";



const authenticator = new Authenticator()

const idGenerator = new IdGenerator();

export class RecipeBusiness{
    createRecipe = async (input:RecipeInputDTO) => {
        try{
            
            const { title, description, createdAt, token } = input;

            
            if(!title || !description || !createdAt){
                throw new Error ("Preencha os campos título, descrição e data de criação.")
            }
            
            const authenticator = new Authenticator();
            const valid = authenticator.getTokenData(token);
            

            const id = new IdGenerator().generateId()
            const recipe:Recipe= {
                id, 
                title, 
                description, 
                created_at: createdAt,
            }
            
            const recipeDatabase = new RecipeDatabase();
            await recipeDatabase.createRecipe(recipe);

           }catch(error:any){
                throw new CustomError(400, error.message)
        }
    };
}