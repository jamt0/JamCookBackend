import IngredientsManager from "models/Ingredients/IngredientsManager";
import { Response, Request } from "express";

export default class IngredientsController {
  public static getIngredients = async (req: Request, res: Response) => {
    const result = await IngredientsManager.getIngredients(req);
    res.status(200).send(result);
  };
}
