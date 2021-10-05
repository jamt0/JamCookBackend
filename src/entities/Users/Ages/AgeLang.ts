import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "ages_lang" })
export class TipLang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: string;

  @Column()
  language: string;

  @Column()
  name: string;
}
