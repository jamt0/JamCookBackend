import { Request } from "express";
import { UploadedFile } from "express-fileupload";
import User from 'models/Users/User';

export default class ImageAvatarManager {

    public static updateImageAvatar = async (req: Request) => {
        if (!req.files || Object.keys(req.files).length === 0) {
            return {error: "No files were uploaded."};
        }
        const avatarImage = req.files.avatarImage as UploadedFile;
        const uploadPath = 'public/images/avatars/' + avatarImage.name;
        avatarImage.mv(uploadPath, function(err: any) {
            if (err){
                console.log(err)
                return {error: "error guardando el archivo"}
            }
        })
        return {error: 'File uploaded!'};
    }

    public static getImageAvatar = async (req: Request) => {
        
    }
}