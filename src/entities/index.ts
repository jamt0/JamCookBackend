import {ConnectionOptions} from "typeorm";
import config from "config/db";
import {User} from 'entities/Users/User'

  let connectionOptions: ConnectionOptions;
  let entities = [User];
  // the application is executed on the local machine
  connectionOptions = {
    type: config.TYPE,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    synchronize: true,
    logging: true,
    entities: entities,
  };
  if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the mysql database
    Object.assign(connectionOptions, {
      type: config.TYPE,
      url: process.env.DATABASE_URL,
      synchronize: true,
      logging: true,
      entities: entities,
    });
  }

export default connectionOptions;