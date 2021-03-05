import * as express from "express";

export default class UsersManager {

    public static getUsers = async (req: express.Request) => {
        return {"response": "hola puto mundo, mostrar todos los usuarios"};
    }

    public static createUser = async (req: express.Request) => {
        return {"response": "hola puto mundo, crear un usuario"};
    }

    public static readUser = async (req: express.Request) => {
        return {"response": "hola puto mundo, mostrar un usuario"};
    }
    
    public static updateUser = async (req: express.Request) => {
        return {"response": "hola puto mundo, modificar un usuario"};
    }

    public static deleteUser = async (req: express.Request) => {
        return {"response": "hola puto mundo, eliminar un usuario"};
    }

}
