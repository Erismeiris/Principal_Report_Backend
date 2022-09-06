const { response } = require('express');
const {sequelize} = require('../config/mysql');

const LearnerAttendance = require('../models/learner_attendance.model');

const createLearnerAttendance = async (req, res = response) => {
    const {report_id, grade, roll, actuall_attendance, percentage_attendance} = req.body;
    const sql = `INSERT INTO learner_attendance (report_id, grade, roll, actuall_attendance, percentage_attendance) VALUES (${report_id}, '${grade}', ${roll}, ${actuall_attendance}, ${percentage_attendance})`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.INSERT});
        res.json({
            ok: true,
            message: 'Learner Attendance created successfully',
            result
          
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error creating Learner Attendance',
            error
        });
    }
}

const getLearnerAttendance = async (req, res = response) => {
    
    const sql = `SELECT * FROM learner_attendance`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});
        res.json({
            ok: true,
            message: 'Learner Attendance retrieved successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error retrieving Learner Attendance',
            error
        });
    }
}

const deleteLearnerAttendance = async (req, res = response) => {
    const {id_learner_attendance} = req.params;
    const sql = `DELETE FROM learner_attendance WHERE id_learner_attendance = ${id_learner_attendance}`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.DELETE});
        res.json({
            ok: true,
            message: 'Learner Attendance deleted successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error deleting Learner Attendance',
            error
        });
    }
}

const updateLearnerAttendance = async (req, res = response) => {
    const {id_learner_attendance} = req.params;
    const {report_id, roll, actuall_attendance, percentage_attendance} = req.body;
    const sql = `UPDATE learner_attendance SET report_id = ${report_id}, roll = ${roll}, actuall_attendance = ${actuall_attendance}, percentage_attendance = ${percentage_attendance} WHERE id_learner_attendance = ${id_learner_attendance}`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.UPDATE});
        res.json({
            ok: true,
            message: 'Learner Attendance updated successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error updating Learner Attendance',
            error
        });
    }
}

getLearnerAttendanceById = async (req, res = response) => {
    const {id_learner_attendance} = req.params;

    try {
        const sql = `SELECT * FROM learner_attendance where id_learner_attendance = ${id_learner_attendance}`;
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});
        res.json({
            ok: true,
            message: 'Learner Attendance retrieved successfully',
            result,
            
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error retrieving Learner Attendance',
            error
        });
    }
}

getLearnerAttendanceByReportId = async (req, res = response) => {
    const {report_id} = req.params;
    const sql = `SELECT * FROM learner_attendance WHERE report_id = ${report_id} order by grade`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});
        res.json({
            ok: true,
            message: 'Learner Attendance retrieved successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error retrieving Learner Attendance',
            error
        });
    }
}


module.exports = {
    createLearnerAttendance,
    getLearnerAttendanceById,
    getLearnerAttendance,
    deleteLearnerAttendance,
    updateLearnerAttendance,
    getLearnerAttendanceByReportId
}