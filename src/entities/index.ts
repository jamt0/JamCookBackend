import {ConnectionOptions} from "typeorm";
import config from "config/db";
import {User} from 'entities/Users/User'
import { Gender } from "entities/Users/Genders/Gender";
import { Age } from "entities/Users/Ages/Age";
import { ImageAvatar } from "entities/Users/ImagesAvatars/ImageAvatar";
import { Preference } from "entities/Users/Preferences/Preference";
import { Allergy } from "entities/Users/Preferences/Allergies/Allergy";
import { Comensal } from "entities/Users/Preferences/Comensals/Comensal";
import { Diet } from "entities/Users/Preferences/Diets/Diet";
import { DislikeIngredient } from "entities/Users/Preferences/DislikeIngredients/DislikeIngredient";
import { KitchenLevel } from "entities/Users/Preferences/KitchenLevels/KitchenLevel";
import { Objective } from "entities/Users/Preferences/Objectives/Objective";


  let connectionOptions: ConnectionOptions;
  let entities = [User, Gender, Age, ImageAvatar, Preference, Allergy, Comensal, Diet, DislikeIngredient, KitchenLevel, Objective ];
  // the application is executed on the local machine
  connectionOptions = {
    type: config.TYPE,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    // synchronize: true,
    logging: true,
    entities: entities,
    extra: { 
      connectionLimit: 10
    }
  };
  if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the mysql database
    Object.assign(connectionOptions, {
      type: config.TYPE,
      url: process.env.DATABASE_URL,
      // synchronize: true,
      logging: true,
      entities: entities,
      extra: { 
        connectionLimit: 10
      }
    });
  }

export default connectionOptions;