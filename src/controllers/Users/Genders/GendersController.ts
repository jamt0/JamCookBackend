import GendersManager from "models/Users/Genders/GendersManager"
import {Response, Request} from "express";

export default class GendersController {

  public static initialize = async ( req: Request, res: Response ) => {
    const result = await GendersManager.initialize(req);
    res.status(200).send(result);
  };

  public static getGenders = async ( req: Request, res: Response ) => {
    const result = await GendersManager.getGenders(req);
    res.status(200).send(result);
  };

}