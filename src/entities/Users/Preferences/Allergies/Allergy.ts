import { Preference } from "entities/Users/Preferences/Preference";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "allergies" })
export class Allergy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ingredients: string;

  @OneToMany((type) => Preference, (preference) => preference.allergy)
  preferences: Preference[];
}
