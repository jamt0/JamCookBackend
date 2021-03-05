import UsersManager from "../../models/Users/UsersManager";
import * as express from "express";

export default abstract class UsersController {

  public static jsonResponse(
    res: express.Response,
    code: number,
    message: string
  ) {
    return res.status(code).json({ message });
  }

  public static getUsers = async (
    req: express.Request,
    res: express.Response
  ) => {
    const resultado = await UsersManager.getUsers(req);
    res.status(200).send(resultado);
  };
}
