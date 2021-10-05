import {
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Recipe from "entities/Recipes/Recipe/Recipe";

@Entity({ name: "tips" })
export default class Tip {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Recipe, (recipe) => recipe.tips)
  recipe: Recipe;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
