import { Request } from "express";
import { getRepository, QueryFailedError } from "typeorm";
import { User } from "entities/Users/User";
import jwt from "jsonwebtoken";
import config from "config/config";
import { validate } from "class-validator";

export default class AuthManager {
  public static signIn = async (req: Request) => {
    const { email, password } = req.body;

    if (!(email && password)) return { error: "Campos requeridos faltantes" };

    let user: User;
    try {
      user = await getRepository(User).findOneOrFail({ where: { email } });
    } catch (error) {
      return { error: "Email no registrado" };
    }

    if (!user.checkPassword(password))
      return { error: "Contraseña incorrecta" };

    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.KEY_ACCESSTOKEN || config.jwtSecret,
      { expiresIn: "12h" }
    );
    return { accessToken };
  };

  public static signUp = async (req: Request) => {
    const { email, password, name } = req.body;

    if (!(email && password && name))
      return { error: "Campos requeridos faltantes" };

    const emailExist = await getRepository(User).findOne({ where: { email } });

    if (emailExist) return { error: "Email registrado" };

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;

    const errors = await validate(user);
    console.log(errors);
    if (errors.length > 0) return { error: "Hay errores en los datos" };

    user.hashPassword();
    try {
      await getRepository(User).save(user);
    } catch (error) {
      return { error: "Error en la base de datos" };
    }

    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.KEY_ACCESSTOKEN || config.jwtSecret,
      { expiresIn: "12h" }
    );
    return { accessToken };
  };

  public static authentication = async (req: Request) => {
    const accessToken = <string>req.headers["accesstoken"];
    if (accessToken === null) {
      return { error: "No hay AccessToken" };
    }
    let user;
    try {
      user = <any>(
        jwt.verify(accessToken, process.env.KEY_ACCESSTOKEN || config.jwtSecret)
      );
    } catch (error) {
      return { error: "Usuario no autorizado" };
    }
    return { user };
  };
}
