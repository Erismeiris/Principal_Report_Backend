
const { response } = require('express');
const {sequelize} = require('../config/mysql');
const Curriculum_coverage = require('../models/curriculum_coverage.model');


const getCurriculumCoverage = async (req, res = response) => {
    const sql = 'SELECT * FROM curriculum_coverage';
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(curriculum_coverage => {
        res.json(curriculum_coverage);
    }   )   .catch(err => { console.log(err) });        //catch error
}


const getCurriculumCoverageByReportId = async (req, res = response) => {
    const {report_id} = req.params;
    const sql = 'SELECT * FROM curriculum_coverage WHERE report_id = ?';
    sequelize.query(sql, { replacements: [report_id], type: sequelize.QueryTypes.SELECT })
    .then(curriculum_coverage => {
        res.json(curriculum_coverage);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const createCurriculum_coverage = async (req, res = response) => {
    const {report_id, grade, subjects_behind_per_grade, names_subject_teachers,
        catchup_programme, progress_monitoring} = req.body;
    const sql = 'INSERT INTO curriculum_coverage (report_id, grade, subjects_behind_per_grade, names_subject_teachers, catchup_programme, progress_monitoring) VALUES (?, ?, ?, ?, ?, ?)';
    sequelize.query(sql, { replacements: [report_id, grade, subjects_behind_per_grade, names_subject_teachers, catchup_programme, progress_monitoring], type: sequelize.QueryTypes.INSERT })
    .then(curriculum_coverage => {
        res.json({
            message: 'Curriculum coverage created successfully'
        });
    }   )   .catch(err => { console.log(err) });        //catch error
}

const deleteCurriculum_coverage = async (req, res = response) => {
    const {id_curriculum_coverage} = req.params;
    const sql = 'DELETE FROM curriculum_coverage WHERE id_curriculum_coverage = ?';
    sequelize.query(sql, { replacements: [id_curriculum_coverage], type: sequelize.QueryTypes.DELETE })
    .then(curriculum_coverage => {
        res.json({
            message: 'Curriculum coverage deleted successfully'
        });
    }   )   .catch(err => { console.log(err) });        //catch error
}



module.exports = {
    getCurriculumCoverage,
    getCurriculumCoverageByReportId,
    createCurriculum_coverage,
    deleteCurriculum_coverage
}