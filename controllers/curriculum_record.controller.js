const { response } = require('express');
const {sequelize} = require('../config/mysql');
const Curriculum_record = require('../models/curriculum_record.model');

const getCurriculumRecord = async (req, res = response) => {
    const sql = 'SELECT * FROM curriculum_record';
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(curriculum_record => {
        res.json(curriculum_record);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const getCurriculumRecordByReportId = async (req, res = response) => {
    const {report_id} = req.params;
    const sql = 'SELECT * FROM curriculum_record WHERE report_id = ?';
    sequelize.query(sql, { replacements: [report_id], type: sequelize.QueryTypes.SELECT })
    .then(curriculum_record => {
        res.json(curriculum_record);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const createCurriculum_record = async (req, res = response) => {
    const {report_id, dates_submissions, name_responsible_teacher, actual_date, challenges_experienced, verification_by_SMT} = req.body;
    const sql = 'INSERT INTO curriculum_record (report_id, dates_submissions, name_responsible_teacher, actual_date, challenges_experienced, verification_by_SMT) VALUES (?, ?, ?, ?, ?, ?)';
    sequelize.query(sql, { replacements: [report_id, dates_submissions, name_responsible_teacher, actual_date, challenges_experienced, verification_by_SMT], type: sequelize.QueryTypes.INSERT })
    .then(curriculum_record => {
        res.json({
            message: 'Curriculum record created successfully'
        });
    }   )   .catch(err => { console.log(err) });        //catch error
}

const deleteCurriculum_record = async (req, res = response) => {
    const {id_curriculum_record} = req.params;
    const sql = 'DELETE FROM curriculum_record WHERE id_curriculum_record = ?';
    sequelize.query(sql, { replacements: [id_curriculum_record], type: sequelize.QueryTypes.DELETE })
    .then(curriculum_record => {
        res.json({
            message: 'Curriculum record deleted successfully'
        });
    }   )   .catch(err => { console.log(err) });        //catch error
}

module.exports = {
    getCurriculumRecord,
    getCurriculumRecordByReportId,
    createCurriculum_record,
    deleteCurriculum_record
}