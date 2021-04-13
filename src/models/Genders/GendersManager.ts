import { Request } from "express";
import { getRepository, Not } from "typeorm";
import { Gender } from "entities/Genders/Gender";

export default class GendersManager {
  public static initialize = async (req: Request) => {
    const opcionesGenero = [
      { value: "1", label: "Mujer" },
      { value: "2", label: "Hombre" },
      { value: "3", label: "Otro" },
      { value: "4", label: "Prefiero no decirlo" },
    ];

    opcionesGenero.forEach(async (genero) => {
      const gender = new Gender();
      gender.id = Number(genero.value);
      gender.name = genero.label;
      try {
        await getRepository(Gender).save(gender);
      } catch (error) {
        console.log(error);
      }
    });
  };
}