import { Request } from "express";
import { getRepository } from "typeorm";
import { User } from 'entities/Users/User';
import jwt from 'jsonwebtoken';
import config from "config/config";

export default class AuthManager {

    public static signIn = async (req: Request) => {
        const { email, password } = req.body;
        if ( !( email && password ) ) {
            return {error : "Campos requeridos faltantes"}
        }
        let user: User;
        try {
            user = await getRepository(User).findOneOrFail({
                email: email
            });
        } catch (error) {
            return {error : "Email no registrado"}
        }
        // if ( !user.checkPassword(password) ){
        //     return {error : "Contraseña incorrecta"}
        // }
        const accessToken = jwt.sign({id: user.id, email: user.email}, process.env.KEY_ACCESSTOKEN || config.jwtSecret, { expiresIn: '1h'});
        return {accessToken};
    }

    public static signUp = async (req: Request) => {
        const { email, password, name } = req.body;
        if ( !( email && password && name ) ) {
            return {error : "Campos requeridos faltantes"}
        }
        const user = await getRepository(User).findOneOrFail({
            email: email
        });
        if (user) {
            return {error : "Email registrado"}
        }
        const newUser = new User();
        newUser.name = name;
        newUser.email = email;
        newUser.password = password;
        await getRepository(User).save(newUser);
        const accessToken = jwt.sign({id: newUser.id, email: newUser.email}, process.env.KEY_ACCESSTOKEN || config.jwtSecret, { expiresIn: '1h'});
        return {accessToken};
    }

    public static authentication = async (req: Request) => {
        const accessToken = <string>req.headers['accesstoken'];
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