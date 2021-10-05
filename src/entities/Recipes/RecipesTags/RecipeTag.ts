import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import Recipe from "../Recipe/Recipe";
import Tag from "../Tags/Tag";

@Entity({ name: "recipes_tags" })
export class RecipeTag extends BaseEntity {
  @PrimaryColumn()
  recipeId: number;

  @PrimaryColumn()
  tagId: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.tagConnection, { primary: true })
  @JoinColumn({ name: "recipeId" })
  recipe: Promise<Recipe>;

  @ManyToOne(() => Tag, (tag) => tag.recipeConnection, {
    primary: true,
  })
  @JoinColumn({ name: "tagId" })
  tag: Promise<Tag>;
}
