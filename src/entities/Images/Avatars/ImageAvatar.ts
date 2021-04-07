import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ImageAvatar {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;

}