import AuthManager from "../../models/Auth/AuthManager";
import {Response, Request} from "express";

export default class AuthController {
    public static login = async ( req: Request, res: Response ) => {

        const result = await AuthManager.login(req);

        if( result.error )
            res.status(400).send(result);
        else
            res.status(200).send(result);
        
      };
}