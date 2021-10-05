import {
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Recipe from "../Recipe/Recipe";

@Entity({ name: "steps" })
export default class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Recipe, (recipe) => recipe.steps)
  recipe: Recipe;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
