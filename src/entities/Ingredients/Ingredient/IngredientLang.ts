import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "ingredients_lang" })
export default class IngredientLang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ingredient: string;

  @Column()
  language: string;

  @Column()
  name: string;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
