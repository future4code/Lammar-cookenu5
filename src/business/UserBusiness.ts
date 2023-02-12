import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/CustomError";
import {
  UserInputDTO,
  user,
  LoginInputDTO
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class UserBusiness {
  public signup = async (input: UserInputDTO) => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const user: user = {
        id,
        name,
        email,
        password
      };

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = authenticator.generateToken({id})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400,'Preencha os campos "email" e "password"');
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUserByEmail(email);

      if(!user) {
        throw new UserNotFound()
      }

      if(user.password !== password) {
        throw new InvalidPassword()
      }

      const token = authenticator.generateToken({id: user.id})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}