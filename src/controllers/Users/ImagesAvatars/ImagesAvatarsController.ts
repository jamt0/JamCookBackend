import ImagesAvatarsManager from "models/Users/ImagesAvatars/ImagesAvatarsManager";
import {Response, Request} from "express";

export default class ImagesAvatarsController {

    public static updateImageAvatar = async ( req: Request, res: Response ) => {
        const result = await ImagesAvatarsManager.updateImageAvatar(req);
        res.status(200).send(result);
    };

    public static getImageAvatar = async ( req: Request, res: Response ) => {
        const result = await ImagesAvatarsManager.getImageAvatar(req);
        res.status(200).send(result);
    };

}