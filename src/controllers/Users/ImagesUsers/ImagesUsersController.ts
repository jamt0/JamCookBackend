import ImagesUsersManager from "models/Users/ImagesUsers/ImagesUsersManager";
import { Response, Request } from "express";

export default class ImagesUsersController {
  public static putImageAvatar = async (req: Request, res: Response) => {
    const result = await ImagesUsersManager.putImageAvatar(req);
    res.status(200).send(result);
  };

  public static getImageAvatar = async (req: Request, res: Response) => {
    const result = await ImagesUsersManager.getImageAvatar(req);
    res.status(200).send(result);
  };
}
