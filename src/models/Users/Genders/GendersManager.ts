import { Request } from "express";
import { getRepository } from "typeorm";
import { Gender } from "entities/Users/Genders/Gender";

export default class GendersManager {
  public static initialize = async (req: Request) => {
    const opcionesGenero = [
      { value: "1", label: "genero_mujer" },
      { value: "2", label: "genero_hombre" },
      { value: "3", label: "genero_otro" },
      { value: "4", label: "genero_prefiero_no_decirlo" },
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
  
  public static getGenders = async (req: Request) => {}
}