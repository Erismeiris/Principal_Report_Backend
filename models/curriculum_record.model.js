const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');



const Curriculum_record = sequelize.define('curriculum_record', {
   id_curriculum_record: {
         type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
    },
   report_id: {
        type: DataTypes.INTEGER,
        allowNull: false,     //not null
    },
   dates_submissions: {
        type: DataTypes.DATE,
        allowNull:true,
    },
   name_responsible_teacher: {
        type: DataTypes.STRING,
        allowNull:true,
    },
   actual_date: {
        type: DataTypes.DATE,
        allowNull:true,
    },
   challenges_experienced: {
        type: DataTypes.STRING,
        allowNull:true,            
    },
   verification_by_SMT: {
        type: DataTypes.STRING,
        allowNull:true,
    },
});


module.exports = Curriculum_record;
   