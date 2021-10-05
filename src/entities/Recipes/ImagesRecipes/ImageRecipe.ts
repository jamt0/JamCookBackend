import Recipe from "entities/Recipes/Recipe/Recipe";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "images_recipes" })
export class ImageRecipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @OneToOne((type) => Recipe, (recipe) => recipe.imageRecipe)
  @JoinColumn()
  recipe: Recipe;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
