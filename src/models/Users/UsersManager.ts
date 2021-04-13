import { Request } from "express";
import { getRepository, Not } from "typeorm";
import { Age } from "entities/Ages/Age";
import { Gender } from "entities/Genders/Gender";
import { User } from "entities/Users/User";
import { validate } from "class-validator";

export default class UsersManager {
  public static getUser = async (req: Request) => {
    const id = Number(req.params.id);

    let user: User;
    try {
      user = await getRepository(User)
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.gender", "gender")
        .leftJoinAndSelect("user.age", "age")
        .where({ id })
        .getOneOrFail();
    } catch (error) {
      return { error: "No existe el usuario" };
    }

    const { name, email, age, gender } = user;
    const usuario = { name, email, age, gender };
    return { user: usuario };
  };

  public static updateUser = async (req: Request) => {
    const id = Number(req.params.id);
    const { name, email, genderId, ageId } = req.body;

    if (!(name && email)) return { error: "Campos requeridos faltantes" };

    let user: User;
    try {
      user = await getRepository(User).findOneOrFail({ id });
    } catch (error) {
      return { error: "No existe el usuario" };
    }

    const userWithSameEmail: User | undefined = await getRepository(User).findOne({ where: { id: Not(id), email } });

    if (userWithSameEmail) return { error: "Correo ya esta en uso" };

    let gender: Gender;
    if (genderId) {
      try {
        gender = await getRepository(Gender).findOneOrFail({ id: genderId });
        user.gender = gender;
      } catch (error) {
        return { error: "El genero seleccionado no existe" };
      }
    }

    let age: Age;
    if (ageId) {
      try {
        age = await getRepository(Age).findOneOrFail({ id: ageId });
        user.age = age;
      } catch (error) {
        return { error: "La edad seleccionada no existe" };
      }
    }

    user.name = name;
    user.email = email;

    const errors = await validate(user);
    console.log(errors);
    if (errors.length > 0) return { error: "Hay errores en los datos" };

    try {
      await getRepository(User).save(user);
    } catch (error) {
      return { error: "Error en la base de datos" };
    }
    return { error: null };
  };

  public static deleteUser = async (req: Request) => {
    const id = req.body.id;

    let user: User;
    try {
      user = await getRepository(User).findOneOrFail({ id });
    } catch (error) {
      return { error: "No existe el usuario" };
    }

    await getRepository(User).softDelete(user);
    return { error: null };
  };
}
