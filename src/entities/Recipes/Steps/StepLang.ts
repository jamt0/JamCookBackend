import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "steps_lang" })
export class RecipeLang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  step: string;

  @Column()
  language: string;

  @Column()
  description: string;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
