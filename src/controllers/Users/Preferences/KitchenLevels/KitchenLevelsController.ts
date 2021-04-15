import KitchenLevelsManager from "models/Users/Preferences/KitchenLevels/KitchenLevelsManager"
import {Response, Request} from "express";

export default class KitchenLevelsController {

  public static initialize = async ( req: Request, res: Response ) => {
    const result = await KitchenLevelsManager.initialize(req);
    res.status(200).send(result);
  };

}