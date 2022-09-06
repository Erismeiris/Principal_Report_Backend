const { Router } = require('express');
const { check } = require('express-validator');
const { getTeacherAttendanceByReportId, getAllTeacherAttendance, createTeacherAttendance, deleteTeacherAttendance} = require('../controllers/teacher_attendance.controller');
const { fieldValidators } = require('../middlewares/field.validators');
const { validateJWT } = require('../middlewares/validate.jwt');

const router = Router();



router.get('/teacher_attendance_by_report_id/:report_id', validateJWT, getTeacherAttendanceByReportId);


router.get('/teacher_attendance', validateJWT, getAllTeacherAttendance);

router.post('/teacher_attendance', validateJWT, 
[
    check('report_id', 'Report_id is required').not().isEmpty(),
    fieldValidators
], createTeacherAttendance);


router.delete('/teacher_attendance/:id_teacher_attendance', validateJWT, deleteTeacherAttendance);




module.exports = router;