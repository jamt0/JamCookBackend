import { Preference } from "entities/Users/Preferences/Preference";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "diets" })
export class Diet {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => Preference, (preference) => preference.diet)
  preferences: Preference[];
}
