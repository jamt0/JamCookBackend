import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({ name: 'images_recipes' })
export class ImageRecipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;

}