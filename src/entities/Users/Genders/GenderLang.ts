import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "genders_lang" })
export class TipLang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;

  @Column()
  language: string;

  @Column()
  name: string;
}
