import KitchenLevelsManager from "models/Users/Preferences/KitchenLevels/KitchenLevelsManager"
import {Response, Request} from "express";

export default class KitchenLevelsController {
  public static initialize = async ( req: Request, res: Response ) => {
    const result = await KitchenLevelsManager.initialize(req);
    res.status(200).send(result);
  };

  public static getkitchenLevels = async ( req: Request, res: Response ) => {
    const result = await KitchenLevelsManager.getkitchenLevels(req);
    res.status(200).send(result);
  };

  public static getkitchenLevelsUser = async ( req: Request, res: Response ) => {
    const result = await KitchenLevelsManager.getkitchenLevelsUser(req);
    res.status(200).send(result);
  };
}