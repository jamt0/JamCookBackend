import { Request } from "express";
import User from './User'

export default class UsersManager {

    public static getUsers = async (req: Request) => {
        const users = await User.findAll();
        return {users};
    }

    public static createUser = async (req: Request) => {

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const newUser = await User.create(
            { 
                name, 
                email, 
                password
            }
        );
        return {newUser};
    }

    public static readUser = async (req: Request) => {
        const id = req.body.id;

        const userRead = await User.findOne(
            { 
                where: { id } 
            }
        );

        return {userRead};
    }
    
    public static updateUser = async (req: Request) => {

        const id = req.body.id;
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const userUpdate = await User.findOne(
            { 
                where: { id } 
            }
        );

        userUpdate.name = name;
        userUpdate.email = email;
        userUpdate.password = password;

        await userUpdate.save();

        return {userUpdate};
    }

    public static deleteUser = async (req: Request) => {
        const id = req.body.id;

        const userDelete = await User.findOne(
            { 
                where: { id } 
            }
        );

        await userDelete.destroy();

        return {userDelete};
    }

}
