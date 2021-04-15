import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, OneToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, JoinColumn } from "typeorm";
import { User } from "entities/Users/User";
import { Allergy } from "entities/Users/Preferences/Allergies/Allergy";
import { Comensal } from "entities/Users/Preferences/Comensals/Comensal";
import { Diet } from "entities/Users/Preferences/Diets/Diet";
import { DislikeIngredient } from "entities/Users/Preferences/DislikeIngredients/DislikeIngredient";
import { KitchenLevel } from "entities/Users/Preferences/KitchenLevels/KitchenLevel";
import { Objective } from "entities/Users/Preferences/Objectives/Objective";

@Entity({ name: 'preferences' })
export class Preference {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Allergy, allergy => allergy.preferences)
  allergy: Allergy;

  @ManyToOne(type => Comensal, comensal => comensal.preferences)
  comensal: Comensal;

  @ManyToOne(type => Diet, diet => diet.preferences)
  diet: Diet;

  @ManyToOne(type => DislikeIngredient, dislikeIngredient => dislikeIngredient.preferences)
  dislikeIngredient: DislikeIngredient;

  @ManyToOne(type => KitchenLevel, kitchenLevel => kitchenLevel.preferences)
  kitchenLevel: KitchenLevel;

  @ManyToOne(type => Objective, objective => objective.preferences)
  objective: Objective;

  @OneToOne(type => User, user => user.preference)
  @JoinColumn()
  user: User;

  @UpdateDateColumn()
  updateAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

}
