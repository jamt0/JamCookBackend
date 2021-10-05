import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "recipes_lang" })
export class RecipeLang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recipe: string;

  @Column()
  language: string;

  @Column()
  name: string;

  @Column()
  introduction: string;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
