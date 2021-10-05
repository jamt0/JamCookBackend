import {
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
} from "typeorm";
import ImageIngredient from "entities/Ingredients/ImagesIngredients/ImageIngredient";

@Entity({ name: "ingredients" })
export default class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    (type) => ImageIngredient,
    (imageIngredient) => imageIngredient.ingredient
  )
  imageIngredient: ImageIngredient;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
