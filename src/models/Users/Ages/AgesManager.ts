import { Request } from "express";
import { getRepository } from "typeorm";
import { Age } from "entities/Users/Ages/Age";

export default class AgesManager {
  public static initialize = async (req: Request) => {
    const opcionesEdad = [
      { value: "1", label: "edad_menos_de_25" },
      { value: "2", label: "edad_25_29" },
      { value: "3", label: "edad_30_34" },
      { value: "4", label: "edad_35_39" },
      { value: "5", label: "edad_40_49" },
      { value: "6", label: "edad_50_64" },
      { value: "7", label: "edad_65_mas" },
    ];

    opcionesEdad.forEach(async (edad) => {
      const age = new Age();
      age.id = Number(edad.value);
      age.name = edad.label;
      try {
        await getRepository(Age).save(age);
      } catch (error) {
        console.log(error);
      }
    });
  };

  public static getAges = async (req: Request) => {}
}