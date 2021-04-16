import DislikeIngredientsManager from "models/Users/Preferences/DislikeIngredients/DislikeIngredientsManager"
import {Response, Request} from "express";

export default class DislikeIngredientsController {
  public static getDislikeIngredients = async ( req: Request, res: Response ) => {
    const result = await DislikeIngredientsManager.getDislikeIngredients(req);
    res.status(200).send(result);
  };

  public static getDislikeIngredientsUser = async ( req: Request, res: Response ) => {
    const result = await DislikeIngredientsManager.getDislikeIngredientsUser(req);
    res.status(200).send(result);
  };
}