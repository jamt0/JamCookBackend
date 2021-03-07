import { Request } from "express";
import User from '../Users/User'
import * as jwt from 'jsonwebtoken';
import config from "../../config/config";

export default class AuthManager {

    public static login = async (req: Request) => {

        const { email, password } = req.body;

        if ( !( email && password ) ) {
            return {error : "Campos requeridos faltantes"}
        }

        const user = await User.findOne(
            { 
                where: { email } 
            }
        );

        if ( !user ) {
            return {error : "Email no registrado"}
        }

        if ( !user.checkPassword(password) ){
            return {error : "Contraseña incorrecta"}
        }

        const tokenAccess = jwt.sign({id: user.id, email: user.email}, process.env.KEY_ACCESSTOKEN || config.jwtSecret, { expiresIn: '1h'});

        return {user, tokenAccess};
    }

}