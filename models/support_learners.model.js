const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/mysql');


const SupportLearners = sequelize.define('support_learners', {
    id_support_learners: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    report_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    grade_remedial: {
        type: DataTypes.STRING,
        allowNull: false
    },
number_remedial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
grade_integrated: {
        type: DataTypes.STRING,
        allowNull: false
    },
number_integrated: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


module.exports = {
    SupportLearners
}



