const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize('mysql://root:localhost:3306/test');

// create model for SBA
const SBA = sequelize.define('sba', {
    id_sba: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    report_id: {
        type: DataTypes.INTEGER,
        allowNull: false,     //not null
    },
    grade: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    term: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    task: {
        type: DataTypes.STRING,
        allowNull:true,
    },
});

module.exports = SBA;