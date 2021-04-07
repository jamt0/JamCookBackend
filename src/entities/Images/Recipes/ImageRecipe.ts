import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ImageRecipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;

}