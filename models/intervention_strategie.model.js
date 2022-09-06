const {Sequelize,DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');

const Intervention_strategie = sequelize.define('intervention_strategie', {
    id_intervenction_strategies: {
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
        allowNull: false,
    },
    subject_underperforming: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    intervention_strategies: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    progress_in_month: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


module.exports = Intervention_strategie;