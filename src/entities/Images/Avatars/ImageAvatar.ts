import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import { IsDate, IsNotEmpty } from "class-validator";
import { User } from "entities/Users/User";

@Entity()
export class ImageAvatar {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    path: string;

    @Column()
    @IsDate()
    updateAt: Date;
  
    @Column()
    @IsDate()
    createdAt: Date;

    @OneToOne(type => User, user => user.imageAvatar)
    @JoinColumn()
    user: User;

}