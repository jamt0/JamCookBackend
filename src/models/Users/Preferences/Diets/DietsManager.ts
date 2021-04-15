import { Request } from "express";
import { getRepository } from "typeorm";
import { Diet } from "entities/Users/Preferences/Diets/Diet";

export default class DietsManager {
  public static initialize = async (req: Request) => {
    const opcionesDietas = [
      { value: "1", label: "ninguna_dieta" },
      { value: "2", label: "dieta_vegetariano" },
      { value: "3", label: "dieta_pescatariano" },
      { value: "4", label: "dieta_vegano" },
    ];

    opcionesDietas.forEach(async (item) => {
      const diet = new Diet();
      diet.id = Number(item.value);
      diet.name = item.label;
      try {
        await getRepository(Diet).save(diet);
      } catch (error) {
        console.log(error);
      }
    });
  };
}