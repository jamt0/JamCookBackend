if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

module.exports = {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME || "jam_cook",
    dialect: "mysql",
    protocol: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    INSTANCE: process.env.DB_INSTANCE,
    SOCKETS_PATH: process.env.DB_SOCKETS_PATH,
    CLOUD_SQL: process.env.CLOUD_SQL
};