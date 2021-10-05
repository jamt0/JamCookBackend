import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "tips_lang" })
export class TipLang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tip: string;

  @Column()
  language: string;

  @Column()
  description: string;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
