import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({ name: "languages" })
export default class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  code: string;

  @Column()
  @IsNotEmpty()
  name: string;
}
