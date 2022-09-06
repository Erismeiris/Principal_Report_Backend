const { sequileze, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');



const SupportGivenToLearners = sequelize.define('support_given_to_learners', {
    // Model attributes are defined here
    id_support_given_to_learners: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    report_id: {
        type: DataTypes.INTEGER,
        allowNull: false,     //not null
    },
    orphaned: {
        type: DataTypes.NUMBER,
        allowNull: true,     //not null
    },
    households: {
        type: DataTypes.NUMBER,
        allowNull: true,     //not null
    },
    teenage_pregnancy: {
        type: DataTypes.NUMBER,
        allowNull: true,     //not null
    },
    receiving_support_at_school: {
        type: DataTypes.NUMBER,
        allowNull: true,     //not null
    },
    referred_to_DBST: {
        type: DataTypes.NUMBER,
        allowNull: true,     //not null
    },
    cases_successfully_closed: {
        type: DataTypes.NUMBER,
        allowNull: true,     //not null
    },
    living_with_disabilities: {
        type: DataTypes.NUMBER,
        allowNull: true,     //not null
    }
});


module.exports = SupportGivenToLearners;