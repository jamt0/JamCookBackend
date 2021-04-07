import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Gender {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}