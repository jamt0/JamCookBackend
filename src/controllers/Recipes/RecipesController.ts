import RecipesManager from "models/Recipes/RecipesManager";
import { Response, Request } from "express";

export default class RecipesController {
  public static getRecipesSearch = async (req: Request, res: Response) => {
    const result = await RecipesManager.getRecipesSearch(req);
    res.status(200).send(result);
  };
  public static getRecipesExplore = async (req: Request, res: Response) => {
    const result = await RecipesManager.getRecipesExplore(req);
    res.status(200).send(result);
  };
  public static getRecipesList = async (req: Request, res: Response) => {
    const result = await RecipesManager.getRecipesList(req);
    res.status(200).send(result);
  };
  public static getRecipe = async (req: Request, res: Response) => {
    const result = await RecipesManager.getRecipe(req);
    res.status(200).send(result);
  };
}
