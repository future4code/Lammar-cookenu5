import { CustomError } from "../error/customError";
import { ProfileInputDTO, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })
        .into("Verify_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Verify_users")
      .select().where({email})
      
      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfile = async (id:string):Promise<ProfileInputDTO[]> => {
    try {
      const result = await UserDatabase.connection.select().where({id}).from("Verify_users");
      
      return result
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}

// public getProfile = async (id:string):Promise<ProfileInputDTO[]> => {
//   try {
//     const result = await UserDatabase.connection.select().where({id}).from("Verify_users");
    
//     return result
//   } catch (error: any) {
//     throw new CustomError(error.statusCode, error.message);
//   }
// };