import ComensalsManager from "models/Users/Preferences/Comensals/ComensalsManager"
import {Response, Request} from "express";

export default class ComensalsController {
  public static getComensalsUser = async ( req: Request, res: Response ) => {
    const result = await ComensalsManager.getComensalsUser(req);
    res.status(200).send(result);
  };
}