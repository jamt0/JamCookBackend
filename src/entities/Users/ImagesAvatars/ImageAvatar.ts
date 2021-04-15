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

@Entity({ name: "images_avatars" })
export class ImageAvatar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  path: string;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne((type) => User, (user) => user.imageAvatar)
  @JoinColumn()
  user: User;
}
