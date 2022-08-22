const { Sequelize } = require('sequelize');


const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql' 
  });

const dbConnectMySQL = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {  
        console.log('Unable to connect to the database:', error); }
    }


    
    module.exports = {sequelize, dbConnectMySQL};