const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');

const Report = sequelize.define('report', {
    // Model attributes are defined here
    id_report: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    school_id: {
        type: DataTypes.INTEGER,
        allowNull: false,     //not null
    },
    report_month: {
        type: DataTypes.DATE,
        allowNull: false,     //not null
    },

});


// Export the model
module.exports = Report;
