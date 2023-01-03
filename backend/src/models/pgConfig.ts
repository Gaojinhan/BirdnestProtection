import { Sequelize} from 'sequelize'
require('dotenv').config()

const hostName: string = process.env.DB_HOST;
const userName: string = process.env.DB_USER;
const password: string = process.env.DB_PASSWORD;
const database: string = process.env.DB;
const dialect: any = process.env.DB_DIALECT;

//const Sequelize = require('sequelize');
export const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    dialect: dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
});