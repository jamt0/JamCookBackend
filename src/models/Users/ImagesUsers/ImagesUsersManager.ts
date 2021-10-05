import { Request } from "express";
import { UploadedFile } from "express-fileupload";
import { User } from "entities/Users/User";
import { getRepository } from "typeorm";
import { ImageUser } from "entities/Users/ImagesUsers/ImageUser";
import config from "config/config";
import path from "path";

export default class ImageAvatarManager {
  public static putImageAvatar = async (req: Request) => {
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
    const uploadPath =
      "public/images/avatars/" + user.id + avatarImageExtension;

    if (!config.extensionsImages.includes(avatarImageExtension))
      return { error: "No es una imagen" };

    //si ya existe una imagen con el id del user lo correcto seria eliminarla, pero como si son de diferente ext

    await avatarImage.mv(uploadPath);

    //faltaria validar el error de mv

    let imageUser: ImageUser;
    try {
      imageUser = await getRepository(ImageUser).findOneOrFail({
        where: { user },
      });
      imageUser.path = uploadPath.replace("public/", "");
    } catch (error) {
      imageUser = new ImageUser();
      imageUser.path = uploadPath.replace("public/", "");
      imageUser.user = user;
    }

    try {
      await getRepository(ImageUser).save(imageUser);
    } catch (error) {
      return { error: "Error guardando el archivo" };
    }

    return { success: "Archivo Subido" };
  };

  public static getImageAvatar = async (req: Request) => {
    const id = req.params.id;

    let user: User;
    try {
      user = await getRepository(User).findOneOrFail({ where: { id } });
    } catch (error) {
      return { error: "No existe el usuario" };
    }

    let imageUser: ImageUser;
    try {
      imageUser = await getRepository(ImageUser).findOneOrFail({
        where: { user },
      });
      return { success: "OK", path: imageUser.path };
    } catch (error) {
      return { success: "OK", path: "images/avatars/default.png" };
    }
  };
}
