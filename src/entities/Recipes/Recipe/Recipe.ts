import {
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { ImageRecipe } from "entities/Recipes/ImagesRecipes/ImageRecipe";
import Step from "entities/Recipes/Steps/Step";
import Tip from "entities/Recipes/Tips/Tip";
import { RecipeTag } from "../RecipesTags/RecipeTag";

@Entity({ name: "recipes" })
export default class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ImageRecipe, (imageRecipe) => imageRecipe.recipe)
  imageRecipe: ImageRecipe;

  @OneToMany(() => Step, (step) => step.recipe)
  steps: Step[];

  @OneToMany(() => Step, (step) => step.recipe)
  tips: Tip[];

  @OneToMany(() => RecipeTag, (recipeTag) => recipeTag.recipe)
  tagConnection: Promise<RecipeTag[]>;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
