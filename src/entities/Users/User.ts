import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import Bcript from "bcryptjs";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

}