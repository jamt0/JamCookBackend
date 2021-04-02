import { Request } from "express";
import User from '../Users/User'
import * as jwt from 'jsonwebtoken';
import config from "../../config/config";

export default class AuthManager {

    public static signIn = async (req: Request) => {

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

        const accessToken = jwt.sign({id: user.id, email: user.email}, process.env.KEY_ACCESSTOKEN || config.jwtSecret, { expiresIn: '1h'});

        return {user, accessToken};
    }

    public static signUp = async (req: Request) => {

        const { email, password, name } = req.body;

        if ( !( email && password && name ) ) {
            return {error : "Campos requeridos faltantes"}
        }

        const user = await User.findOne(
            { 
                where: { email } 
            }
        );

        if ( user ) {
            return {error : "Email registrado"}
        }

        const newUser = await User.create(
            { 
                name, 
                email, 
                password
            }
        );

        const accessToken = jwt.sign({id: newUser.id, email: newUser.email}, process.env.KEY_ACCESSTOKEN || config.jwtSecret, { expiresIn: '1h'});

        return {user: newUser, accessToken};
    }

    public static authentication = async (req: Request) => {

        const accessToken = <string>req.headers['accesstoken'];

        console.log(accessToken)

        if ( accessToken === null ) {
            return {error : "No hay AccessToken"}
        }

        let user;

        try {
            user = <any>jwt.verify(accessToken, process.env.KEY_ACCESSTOKEN || config.jwtSecret);
        } catch (error) {
            return {error : "Usuario no autorizado"}
        }

        return { user };
    }

}