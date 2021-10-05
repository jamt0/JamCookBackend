import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { User } from "entities/Users/User";

@Entity({ name: "images_users" })
export class ImageUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  path: string;

  @OneToOne((type) => User, (user) => user.imageUser)
  @JoinColumn()
  user: User;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
