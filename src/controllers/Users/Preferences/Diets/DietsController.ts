import DietsManager from "models/Users/Preferences/Diets/DietsManager"
import {Response, Request} from "express";

export default class DietsController {
  public static initialize = async ( req: Request, res: Response ) => {
    const result = await DietsManager.initialize(req);
    res.status(200).send(result);
  };

  public static getDiets = async ( req: Request, res: Response ) => {
    const result = await DietsManager.getDiets(req);
    res.status(200).send(result);
  };

  public static getDietsUser = async ( req: Request, res: Response ) => {
    const result = await DietsManager.getDietsUser(req);
    res.status(200).send(result);
  };
}