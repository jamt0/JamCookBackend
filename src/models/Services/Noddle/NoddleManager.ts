import { Request } from "express";
import axios from "axios";
import fs from "fs";

export default class NoddleManager {
  public static getRecipes = async (req: Request) => {
    const response = await axios.get(
      `https://apidev.nooddle.es/api/recipes?tag=20-minutos-o-menos&sort=trending&filter=all&page=1&per_page=9`
    );
    const { data } = response;
    const recipes: any[] = [];

    data.recipes.forEach((recipeNoddle: any, index: number) => {
      const recipe: any = {};
      recipe.id = index.toString();
      recipe.nameRecipe = recipeNoddle.name;
      recipe.pathRecipeImage = recipeNoddle.files[0];
      recipe.pathAvatarImage = "https://picsum.photos/200/300?random=2";
      recipe.introduction = recipeNoddle.description;
      recipe.valoration = [true, true, true, true, false];
      recipe.time = 20;
      recipe.ingredientsNumber = 6;
      recipe.nameUser = "Jamcook";
      recipe.likes = 600;
      recipes.push(recipe);
    });

    var recipesString: string = JSON.stringify(recipes);
    fs.writeFile("recipesList.json", recipesString, (err) => {
      if (err) console.log("error", err);
    });
    console.log(recipes);
    return recipesString;
  };
}
