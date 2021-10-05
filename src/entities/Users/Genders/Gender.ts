import { User } from "entities/Users/User";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "genders" })
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => User, (user) => user.gender)
  users: User[];
}
