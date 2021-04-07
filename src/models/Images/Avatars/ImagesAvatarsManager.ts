import { Request } from "express";
import { UploadedFile } from "express-fileupload";
// import User from "entity/Users/User";

export default class ImageAvatarManager {

  public static updateImageAvatar = async (req: Request) => {
  //   const user = await User.findByPk(req.params.id);
  //   if (user) {
  //     if (!req.files || Object.keys(req.files).length === 0) {
  //       return { error: "No hay archivos cargados" };
  //     }
  //     const avatarImage = req.files.avatarImage as UploadedFile;
  //     const uploadPath = "public/images/avatars/" + avatarImage.name;
  //     avatarImage.mv(uploadPath, function (err: any) {
  //       if (err) {
  //         console.log(err);
  //         return { error: "Error guardando el archivo" };
  //       }
  //     });
  //   }

  //   return { success: "Archivo Subido" };
  };

  public static getImageAvatar = async (req: Request) => {};
}
