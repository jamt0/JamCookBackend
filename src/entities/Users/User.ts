import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, OneToOne } from "typeorm";
import { MinLength, IsEmail, IsNotEmpty, IsDate } from "class-validator";
import { Gender } from "entities/Genders/Gender";
import { Age } from "entities/Ages/Age";
import Bcript from "bcryptjs";
import { ImageAvatar } from "entities/Images/Avatars/ImageAvatar";

@Entity()
@Unique(["email"])
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(8, { message: "Debe tener minimo 8 caracteres" })
  @IsNotEmpty()
  name: string;

  @Column()
  @IsEmail({}, { message: 'Correo electrónico no valido' })
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty({ message: 'La contraseña no puede estar vacia' })
  password: string;

  @ManyToOne(type => Gender, gender => gender.users)
  gender: Gender;

  @ManyToOne(type => Age, age => age.users)
  age: Age;

  @OneToOne(type => ImageAvatar, imageAvatar => imageAvatar.user)
  imageAvatar: ImageAvatar;

  @Column()
  @IsDate()
  updateAt: Date;

  @Column()
  @IsDate()
  createdAt: Date;

  @Column()
  @IsDate()
  deletedAt: Date;

  hashPassword(): void {
    const salt = Bcript.genSaltSync(10);
    this.password = Bcript.hashSync(this.password, salt);
  }

  checkPassword(password: string): boolean {
    return Bcript.compareSync(password, this.password);
  }

}
