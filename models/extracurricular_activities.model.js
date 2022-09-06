const { Sequilize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');

const ExtracurricularActivities = sequelize.define('extracurricular_activities', {
    id_extracurricular_activities: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
  report_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
   },
   activity_date: {
    type: DataTypes.DATE,
    allowNull: false,
    },
 activity:{
    type: DataTypes.STRING,
    allowNull: false,
 },
 learner_involved:{
    type: DataTypes.NUMBER,
    allowNull: false,
    },
});

module.exports = ExtracurricularActivities;