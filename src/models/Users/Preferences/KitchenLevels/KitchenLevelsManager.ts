import { Request } from "express";
import { getRepository } from "typeorm";
import { KitchenLevel } from "entities/Users/Preferences/KitchenLevels/KitchenLevel";

export default class KitchenLevelsManager {
  public static initialize = async (req: Request) => {
    const opcionesKitchenLevels = [
      { value: "1", label: "nivel_cocina_novato" },
      { value: "2", label: "nivel_cocina_medio" },
      { value: "3", label: "nivel_cocina_avanzada" }
    ];

    opcionesKitchenLevels.forEach(async (item) => {
      const kitchenLevel = new KitchenLevel();
      kitchenLevel.id = Number(item.value);
      kitchenLevel.name = item.label;
      try {
        await getRepository(KitchenLevel).save(kitchenLevel);
      } catch (error) {
        console.log(error);
      }
    });
  };
}