import { Request } from "express";
import { UploadedFile } from "express-fileupload";
import { Op } from "sequelize";
import Age from "../Ages/Age";
import Gender from "../Genders/Gender";
import User from './User'

export default class UsersManager {

    public static getUsers = async (req: Request) => {
        const users = await User.findAll();
        return {users};
    }

    public static createUser = async (req: Request) => {

        const { name, email, password} = req.body;

        const newUser = await User.create(
            { 
                name, 
                email, 
                password
            }
        );

        return {newUser};
    }

    public static getUser = async (req: Request) => {
        
        const id = req.params.id;

        const usuario = await User.findOne(
            { 
                where: { id } 
            }
        );

        if ( !usuario ) {
            return {error : "No existe el usuario"}
        }

        const {name, email, imageAvatarId, ageId, genderId} = usuario;

        const user = {name, email, imageAvatarId, ageId, genderId}

        return {user};
    }
    
    public static updateUser = async (req: Request) => {

        const id = req.params.id;
        const { name, email, genderId, ageId } = req.body;

        if ( !( name && email ) ) {
            return {error : "Campos requeridos faltantes"};
        }

        const user = await User.findOne(
            { 
                where: { id } 
            }
        );

        if ( !user ) {
            return {error : "El usuario no existe"};
        }

        if ( email != user?.email ) {
            const userMail = await User.findOne(
                { 
                    where: { 
                        email,
                        id: {
                            [Op.ne]: id
                        }
                    } 
                }
            );
            if ( userMail ) {
                return {error : "Email registrado"};
            }
        }

        if ( genderId ) {
            const gender = await Gender.findOne(
                { 
                    where: { id: genderId } 
                }
            );
            if ( !gender ) {
                return {error : "El genero seleccionado no existe"};
            }
        }
        
        if ( ageId ) {
            const age = await Age.findOne(
                { 
                    where: { id: ageId } 
                }
            );
            if ( !age ) {
                return {error : "La edad seleccionada no existe"};
            }
        }

        user.name = name;
        user.email = email;
        user.genderId = genderId;
        user.ageId = ageId;
        await user.save();
        
        return {error : null}
    }

    public static deleteUser = async (req: Request) => {
        const id = req.body.id;

        const userDelete = await User.findOne(
            { 
                where: { id } 
            }
        );

        if( userDelete )
            await userDelete.destroy();

        return {userDelete};
    }

    public static updateAvatarUser = async (req: Request) => {

        
        if (!req.files || Object.keys(req.files).length === 0) {
            return {error: "No files were uploaded."};
        }
        
        const avatarImage = req.files.avatarImage as UploadedFile;
        console.log(avatarImage);

        const uploadPath = 'src/public/images/avatars/' + avatarImage.name;
        console.log(uploadPath)
      
        avatarImage.mv(uploadPath, function(err: any) {
            if (err){
                console.log(err)
                return {error: "error guardando el archivo"}
            }
        })
      
        return {error: 'File uploaded!'};
    }

}