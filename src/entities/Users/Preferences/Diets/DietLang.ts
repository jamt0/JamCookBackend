import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "diets_lang" })
export class DietLang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  diet: string;

  @Column()
  language: string;

  @Column()
  name: string;
}
