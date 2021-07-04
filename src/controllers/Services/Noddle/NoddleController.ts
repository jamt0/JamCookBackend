import NoddleManager from "models/Services/Noddle/NoddleManager";
import { Response, Request } from "express";

export default class ServicesController {
  public static getRecipes = async (req: Request, res: Response) => {
    const result = await NoddleManager.getRecipes(req);
    res.status(200).send(result);
  };
}
