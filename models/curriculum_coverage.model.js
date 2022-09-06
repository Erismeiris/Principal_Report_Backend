const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:localhost:3306/test');


const Curriculum_coverage = sequelize.define('curriculum_coverage', {
    id_curriculum_coverage: {
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
    subjects_behind_per_grade: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    names_subject_teachers: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    catchup_programme: {
        type: DataTypes.STRING,
        allowNull:true,
},
progress_monitoring: {
    type: DataTypes.STRING,
    allowNull:true,
},
});


    
    
// Export the model
module.exports = Curriculum_coverage;

