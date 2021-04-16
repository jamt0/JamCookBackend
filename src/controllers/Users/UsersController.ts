import UsersManager from "models/Users/UsersManager";
import {Response, Request} from "express";

export default class UsersController {
  public static getUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.getUser(req);
    res.status(200).send(result);
  };

  public static putUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.putUser(req);
    res.status(200).send(result);
  };

  public static deleteUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.deleteUser(req);
    res.status(200).send(result);
  };
}