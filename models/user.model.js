const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');


const User = sequelize.define('user', {
    // Model attributes are defined here
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {    //not null 
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {    //not null
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {    //not null
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {    //not null
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'admin'
    },
});

//Export the model
module.exports = User;