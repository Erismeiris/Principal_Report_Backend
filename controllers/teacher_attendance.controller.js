const {sequelize} = require('../config/mysql');

const {response} = require('express');




const getTeacherAttendanceByReportId = async (req, res = response) => {

    const report_id = req.params.report_id;
    const sql = 'SELECT * FROM teacher_attendance WHERE report_id = ? order by report_id desc';
    const values = [report_id];
    sequelize.query(sql, { replacements: values })
    .then(teacher_attendance => {
        res.json(teacher_attendance[0]);
    }   )   .catch(err => { console.log(err) });        //catch error

}

const getAllTeacherAttendance = async (req, res = response) => {

    const sql = 'SELECT * FROM teacher_attendance';
    const values = [];
    sequelize.query(sql, { replacements: values })
    .then(teacher_attendance => {
        res.json(teacher_attendance);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const createTeacherAttendance = async (req, res = response) => {
    const {report_id,teacher_name, days_absent, type_leave, date_leave_submitted, submitted, actions } = req.body;
    const sql = 'INSERT INTO teacher_attendance (report_id, teacher_name, days_absent, type_leave, date_leave_submitted, submitted, actions) VALUES (?,?,?,?,?,?,?)';
    const values = [report_id, teacher_name, days_absent, type_leave, date_leave_submitted, submitted, actions];
    sequelize.query(sql, { replacements: values })
    .then(teacher_attendance => {
        res.json(teacher_attendance);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const deleteTeacherAttendance = async (req, res = response) => {
    const id = req.params.id_teacher_attendance;
    const sql = 'DELETE FROM teacher_attendance WHERE id_teacher_attendance = ?';
    const values = [id];
    sequelize.query(sql, { replacements: values })
    .then(teacher_attendance => {
        res.json(teacher_attendance);
    }   )   .catch(err => { console.log(err) });        //catch error
}






module.exports = {
    getTeacherAttendanceByReportId,
    getAllTeacherAttendance,
    createTeacherAttendance,
    deleteTeacherAttendance
}

