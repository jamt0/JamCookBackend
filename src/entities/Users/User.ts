import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  OneToOne,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { MinLength, IsEmail, IsNotEmpty, IsDate } from "class-validator";
import { Gender } from "entities/Users/Genders/Gender";
import { Age } from "entities/Users/Ages/Age";
import Bcript from "bcryptjs";
import { ImageUser } from "entities/Users/ImagesUsers/ImageUser";
import { Preference } from "./Preferences/Preference";

@Entity({ name: "users" })
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(3, { message: "Debe tener minimo 8 caracteres" })
  @IsNotEmpty()
  name: string;

  @Column()
  @IsEmail({}, { message: "Correo electrónico no valido" })
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty({ message: "La contraseña no puede estar vacia" })
  password: string;

  @ManyToOne((type) => Gender, (gender) => gender.users)
  @JoinColumn({ name: "genderId" })
  gender: Gender;

  @ManyToOne((type) => Age, (age) => age.users)
  @JoinColumn({ name: "ageId" })
  age: Age;

  @OneToOne((type) => ImageUser, (imageUser) => imageUser.user)
  imageUser: ImageUser;

  @OneToOne((type) => Preference, (preference) => preference.user)
  @JoinColumn({ name: "preferenceId" })
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
