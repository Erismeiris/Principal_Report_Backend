
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');


const School = sequelize.define('school', { 
    // Model attributes are defined here
    id_school: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_district: {
        type: DataTypes.INTEGER,
        allowNull: false,     //not null
    },
    school_name: {
        type: DataTypes.STRING,
        allowNull: false,     //not null
        
    },
    principal_name: {
        type: DataTypes.STRING,
        allowNull: false,     //not null
    },
    grades: {
        type: DataTypes.STRING,
        allowNull: false,     //not null    
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,     //not null
    },
    
}
);

//Export the model
module.exports = School;