import ObjectivesManager from "models/Users/Preferences/Objectives/ObjectivesManager"
import {Response, Request} from "express";

export default class ObjectivesController {
  public static initialize = async ( req: Request, res: Response ) => {
    const result = await ObjectivesManager.initialize(req);
    res.status(200).send(result);
  };

  public static getObjectives = async ( req: Request, res: Response ) => {
    const result = await ObjectivesManager.getObjectives(req);
    res.status(200).send(result);
  };

  public static getObjectivesUser = async ( req: Request, res: Response ) => {
    const result = await ObjectivesManager.getObjectivesUser(req);
    res.status(200).send(result);
  };
}