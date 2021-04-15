import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, OneToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { MinLength, IsEmail, IsNotEmpty, IsDate } from "class-validator";
import { Gender } from "entities/Users/Genders/Gender";
import { Age } from "entities/Users/Ages/Age";
import Bcript from "bcryptjs";
import { ImageAvatar } from "entities/Users/ImagesAvatars/ImageAvatar";
import { Preference } from "./Preferences/Preference";

@Entity({ name: 'users' })
@Unique(["email"])
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(3, { message: "Debe tener minimo 8 caracteres" })
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

  @OneToOne(type => Preference, preference => preference.user)
  preference: Preference;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  hashPassword(): void {
    const salt = Bcript.genSaltSync(10);
    this.password = Bcript.hashSync(this.password, salt);
  }

  checkPassword(password: string): boolean {
    return Bcript.compareSync(password, this.password);
  }

}
