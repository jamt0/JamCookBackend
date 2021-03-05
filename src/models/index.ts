import { Sequelize, DataTypes } from 'sequelize';
const config = require("../config/db");

 var sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.dialect,
        //operatorsAliases: false,
        // disable logging; default: console.log
        // logging: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)

const db = {
    "sequelize": sequelize,
    "DataTypes": DataTypes
};

module.exports = db;