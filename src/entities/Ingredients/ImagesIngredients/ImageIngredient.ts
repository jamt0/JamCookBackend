import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import Ingredient from "entities/Ingredients/Ingredient/Ingredient";

@Entity({ name: "images_ingredients" })
export default class ImageIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  path: string;

  @OneToOne((type) => Ingredient, (ingredient) => ingredient.imageIngredient)
  @JoinColumn()
  ingredient: Ingredient;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
