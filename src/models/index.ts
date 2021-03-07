import { Sequelize } from "sequelize";
const config = require("../config/db");

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the mysql database
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: config.dialect,
    protocol: config.protocol,
    logging: true, //false
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
  });
} else {
  // the application is executed on the local machine
  var sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  });
}

export default sequelize;
