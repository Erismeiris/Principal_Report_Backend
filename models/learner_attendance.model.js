const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');


const LearnerAttendance = sequelize.define('learner_attendance', {
    // Model attributes are defined here
    id_learner_attendance: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
    
    report_id: {
        type: DataTypes.INTEGER,
        allowNull: false,     //not null
    },
    grade:{
        type: DataTypes.STRING,
        allowNull: false
    },
    roll : {
        type: DataTypes.INTEGER,
        allowNull: false,     //not null
    },
    actuall_attendance: {
        type: DataTypes.INTEGER,
        allowNull: false,     //not null
    },
    percentage_attendance: {
        type: DataTypes.FLOAT,
        allowNull: false,     //not null
    },
});


// Export the model
module.exports = LearnerAttendance;

