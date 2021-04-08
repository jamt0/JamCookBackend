import { Request } from "express";
import { UploadedFile } from "express-fileupload";
import { User } from "entities/Users/User";
import { getRepository } from "typeorm";

export default class ImageAvatarManager {

  public static updateImageAvatar = async (req: Request) => {
    const id = req.params.id;

    let user: User;
    try {
        user = await getRepository(User).findOneOrFail({ where: { id } });
    } catch (error) {
        return {error : "No existe el usuario"}
    }

    if (!req.files || Object.keys(req.files).length === 0)
      return { error: "No hay archivos cargados" };

    const avatarImage = req.files.avatarImage as UploadedFile;
    const uploadPath = "public/images/avatars/" + avatarImage.name;
    avatarImage.mv(uploadPath, function (error: any) {
      if (error) {
        console.log(error);
        return { error: "Error guardando el archivo" };
      }
    });

    return { success: "Archivo Subido" };
  };

  public static getImageAvatar = async (req: Request) => {};
}