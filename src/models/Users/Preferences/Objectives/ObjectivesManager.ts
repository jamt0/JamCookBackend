import { Request } from "express";
import { getRepository } from "typeorm";
import { Objective } from "entities/Users/Preferences/Objectives/Objective";

export default class ObjectivesManager {
  public static initialize = async (req: Request) => {
    const opcionesObjectives = [
      { value: "1", label: "objetivo_sano" },
      { value: "2", label: "objetivo_descubrir" },
      { value: "3", label: "objetivo_mejorar" },
    ];

    opcionesObjectives.forEach(async (item) => {
      const objective = new Objective();
      objective.id = Number(item.value);
      objective.name = item.label;
      try {
        await getRepository(Objective).save(objective);
      } catch (error) {
        console.log(error);
      }
    });
  };

  public static getObjectives = async (req: Request) => {}

  public static getObjectivesUser = async (req: Request) => {}
}