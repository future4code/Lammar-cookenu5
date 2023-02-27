import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ProfileInputDTO, profileInputUserDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { Authenticator } from "../services/Authenticator"

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, email, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            email,
            password
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.signup(input);
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    


      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }

      public getProfile = async (req: Request, res: Response) => {
        try {
          const input: ProfileInputDTO = {
          token: req.headers.authorization as string
        };
        
        const userBusiness = new UserBusiness()
        const profile = await userBusiness.getProfile(input);

        res.status(200).send(profile);
  
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
          }
        }
    } 