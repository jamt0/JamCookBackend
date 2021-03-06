import UsersManager from "../../models/Users/UsersManager";
import {Response, Request} from "express";

export default abstract class UsersController {

  public static jsonResponse( res: Response, code: number, message: string ) {
    return res.status(code).json({ message });
  }

  public static getUsers = async ( req: Request, res: Response ) => {
    const resultado = await UsersManager.getUsers(req);
    res.status(200).send(resultado);
  };

  public static createUser = async ( req: Request, res: Response ) => {
    const resultado = await UsersManager.createUser(req);
    res.status(200).send(resultado);
  };

  public static readUser = async ( req: Request, res: Response ) => {
    const resultado = await UsersManager.readUser(req);
    res.status(200).send(resultado);
  };

  public static updateUser = async ( req: Request, res: Response ) => {
    const resultado = await UsersManager.updateUser(req);
    res.status(200).send(resultado);
  };

  public static deleteUser = async ( req: Request, res: Response ) => {
    const resultado = await UsersManager.deleteUser(req);
    res.status(200).send(resultado);
  };
}
