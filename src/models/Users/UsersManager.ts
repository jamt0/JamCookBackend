import { Request } from "express";
import { getRepository } from "typeorm";
import { Age } from "entities/Ages/Age";
import { Gender } from "entities/Genders/Gender";
import { User } from 'entities/Users/User'
import {validate} from "class-validator";
export default class UsersManager {

    public static getUser = async (req: Request) => {
        const id = Number(req.params.id);

        let user: User;
        try {
            user = await getRepository(User).findOneOrFail({id});
        } catch (error) {
            return {error : "No existe el usuario"}
        }
        
        const {name, email} = user;
        const usuario = {name, email} //falta el resto de datos
        return {user: usuario};
    }
    
    public static updateUser = async (req: Request) => {
        const id = Number(req.params.id);
        const { name, email, genderId, ageId } = req.body; //falta los otros datos
        
        if ( !(name && email) )
            return {error : "Campos requeridos faltantes"};

        let user: User;
        try {
            user = await getRepository(User).findOneOrFail({id});
        } catch (error) {
            return {error : "No existe el usuario"}
        }

        if ( genderId ) {
            try {
                await getRepository(Gender).findOneOrFail({id});
            } catch (error) {
                return {error : "El genero seleccionado no existe"}
            }
        }

        if ( ageId ) {
            try {
                await getRepository(Age).findOneOrFail({id});
            } catch (error) {
                return {error : "El edad seleccionada no existe"}
            }
        }

        user.name = name;
        user.email = email;
        // user.genderId = genderId; //aca solo guardariamos esto si existe
        // user.ageId = ageId;

        const errors = await validate(user);
        console.log(errors) 
        if (errors.length > 0)
            return {error : "Hay errores en los datos"}

        try {
            await getRepository(User).save(user);
        } catch (error) {
            return {error : "El correo electrónico ya esta en uso"}
        }
        return {error : null}
    }

    public static deleteUser = async (req: Request) => {
        const id = req.body.id;

        let user: User;
        try {
            user = await getRepository(User).findOneOrFail({id});
        } catch (error) {
            return {error : "No existe el usuario"}
        }

        await getRepository(User).softDelete(user);
        return {error : null};
    }

}