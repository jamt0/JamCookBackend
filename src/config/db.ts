import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

type configType = {
  HOST: string;
  PORT: number;
  USER: string;
  PASSWORD: string;
  TYPE: any;
  DB: string;
};

const config: configType = {
  HOST: process.env.DB_HOST || "localhost",
  PORT: Number(process.env.DB_PORT) || 3306,
  USER: process.env.DB_USER || "test",
  PASSWORD: process.env.DB_PASSWORD || "test",
  DB: process.env.DB_NAME || "test",
  TYPE: "mysql",
};

export default config;