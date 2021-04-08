import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from "config/config";

export const checkJwt = ( req: Request, res: Response, next: NextFunction) => {
    const accessToken = <string>req.headers['accessToken'];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(accessToken, process.env.KEY_ACCESSTOKEN || config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        return res.status(401).send({ error : "Usuario no autorizado" });
    }

    const { id, email } = jwtPayload;

    const newAccessToken = jwt.sign( {id, email}, process.env.KEY_ACCESSTOKEN || config.jwtSecret, { expiresIn: '1h'} );
    res.setHeader('token', newAccessToken);
    next();
}