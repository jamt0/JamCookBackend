import { Preference } from "entities/Users/Preferences/Preference";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "dislike_ingredients" })
export class DislikeIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ingredients: string;

  @OneToMany((type) => Preference, (preference) => preference.dislikeIngredient)
  preferences: Preference[];
}