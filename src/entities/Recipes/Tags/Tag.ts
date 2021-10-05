import {
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { RecipeTag } from "../RecipesTags/RecipeTag";

@Entity({ name: "tags" })
export default class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => RecipeTag, (recipeTag) => recipeTag.tag)
  recipeConnection: Promise<RecipeTag[]>;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
