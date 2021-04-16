import AgesManager from "models/Users/Ages/AgesManager";
import {Response, Request} from "express";

export default class AgesController {
  public static initialize = async ( req: Request, res: Response ) => {
    const result = await AgesManager.initialize(req);
    res.status(200).send(result);
  };

  public static getAges = async ( req: Request, res: Response ) => {
    const result = await AgesManager.getAges(req);
    res.status(200).send(result);
  };
}