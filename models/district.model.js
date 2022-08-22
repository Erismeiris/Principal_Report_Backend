
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');

const District = sequelize.define('district', {
    // Model attributes are defined here
    id_district: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    district_name: {
        type: DataTypes.STRING,
        allowNull: false,     //not null
        
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,     //not null
    }
});



// Export the model
module.exports = District;