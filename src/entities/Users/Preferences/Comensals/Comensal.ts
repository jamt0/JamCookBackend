import { Preference } from "entities/Users/Preferences/Preference";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "comensals" })
export class Comensal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @OneToMany((type) => Preference, (preference) => preference.comensal)
  preferences: Preference[];
}