import { Request } from "express";
import { getRepository, Not } from "typeorm";
import { Age } from "entities/Ages/Age";

export default class AgesManager {
  public static initialize = async (req: Request) => {
    const opcionesEdad = [
      { value: "1", label: "Menos de 25" },
      { value: "2", label: "25-29" },
      { value: "3", label: "30-34" },
      { value: "4", label: "35-39" },
      { value: "5", label: "40-45" },
      { value: "6", label: "45-49" },
      { value: "7", label: "50-64" },
      { value: "8", label: "65+" },
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
}