import { User } from "entities/Users/User";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "ages" })
export class Age {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => User, (user) => user.gender)
  users: User[];
}
