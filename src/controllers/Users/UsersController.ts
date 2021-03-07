import UsersManager from "../../models/Users/UsersManager";
import {Response, Request} from "express";

export default class UsersController {

  public static jsonResponse( res: Response, code: number, message: string ) {
    return res.status(code).json({ message });
  }

  public static getUsers = async ( req: Request, res: Response ) => {
    const result = await UsersManager.getUsers(req);
    res.status(200).send(result);
  };

  public static createUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.createUser(req);
    res.status(200).send(result);
  };

  public static readUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.readUser(req);
    res.status(200).send(result);
  };

  public static updateUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.updateUser(req);
    res.status(200).send(result);
  };

  public static deleteUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.deleteUser(req);
    res.status(200).send(result);
  };
}
