import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Age {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}