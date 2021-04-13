import { Request } from "express";
import { UploadedFile } from "express-fileupload";
import { User } from "entities/Users/User";
import { getRepository } from "typeorm";
import { ImageAvatar } from "entities/Images/Avatars/ImageAvatar";
import config from "config/config";
import path from "path";

export default class ImageAvatarManager {
  public static updateImageAvatar = async (req: Request) => {
    const id = req.params.id;

    let user: User;
    try {
      user = await getRepository(User).findOneOrFail({ where: { id } });
    } catch (error) {
      return { error: "No existe el usuario" };
    }

    if (!req.files || Object.keys(req.files).length === 0)
      return { error: "No hay archivos cargados" };

    const avatarImage = req.files.avatarImage as UploadedFile;
    const avatarImageExtension = path.extname(avatarImage.name);
    const uploadPath ="public/images/avatars/" + user.id + avatarImageExtension;

    if (!config.extensionsImages.includes(avatarImageExtension))
      return { error: "No hay archivos cargados" };

    //si ya existe una imagen con el id del user lo correcto seria eliminarla, pero como si son de diferente ext
    
    avatarImage.mv(uploadPath, function (error: any) {
      if (error) {
        console.log(error);
        return { error: "Error guardando el archivo" };
      }
    });

    let imageAvatar = new ImageAvatar();
    imageAvatar.path = uploadPath;
    imageAvatar.user = user;

    return { success: "Archivo Subido" };
  };

  public static getImageAvatar = async (req: Request) => {};
}
