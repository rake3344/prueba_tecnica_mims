import { Sequelize } from "sequelize";

const DB_NAME: string = process.env.DB_NAME || "prueba_tecnica";
const DB_USER: string = process.env.DB_USER || "postgres";
const DB_PASSWORD: string = process.env.DB_PASSWORD || "admin";
const DB_HOST: string = process.env.DB_HOST || "localhost";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres"
})