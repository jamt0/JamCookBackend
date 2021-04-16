import AllergiesManager from "models/Users/Preferences/Allergies/AllergiesManager"
import {Response, Request} from "express";

export default class AllergiesController {
  public static getAllergies = async ( req: Request, res: Response ) => {
    const result = await AllergiesManager.getAllergies(req);
    res.status(200).send(result);
  };

  public static getAllergiesUser = async ( req: Request, res: Response ) => {
    const result = await AllergiesManager.getAllergiesUser(req);
    res.status(200).send(result);
  };
}