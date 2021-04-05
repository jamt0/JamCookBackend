import UsersManager from "../../models/Users/UsersManager";
import {Response, Request} from "express";

export default class UsersController {

  public static getUsers = async ( req: Request, res: Response ) => {
    const result = await UsersManager.getUsers(req);
    res.status(200).send(result);
  };

  public static createUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.createUser(req);
    res.status(200).send(result);
  };

  public static getUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.getUser(req);
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

  public static updateAvatarUser = async ( req: Request, res: Response ) => {
    const result = await UsersManager.updateAvatarUser(req);
    res.status(200).send(result);
  };
}
