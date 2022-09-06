const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');

module.exports = sequelize.define('teacher', {
    // Model attributes are defined here
    id_teacher_attendance: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    report_id: {    //not null
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    teacher_name: {    //not null
        type: DataTypes.STRING,
        allowNull: false,
    },
    days_absent: {    //not null
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type_leave: {    //not null
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_leave_submitted: {    //not null
        type: DataTypes.DATE,
        allowNull: false,
    },
    submitted: {    //not null
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
    },
    actions: {    //not null
        type: DataTypes.STRING, 
        allowNull: false,
        defaultValue:false,
    },
});


module.exports = Teacher;