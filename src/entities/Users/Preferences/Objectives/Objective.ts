import { Preference } from "entities/Users/Preferences/Preference";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "objectives" })
export class Objective {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Preference, (preference) => preference.objective)
  preferences: Preference[];
}