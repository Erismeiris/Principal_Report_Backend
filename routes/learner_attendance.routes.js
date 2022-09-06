const { Router } = require('express');
const { check } = require('express-validator')
const { getLearnerAttendance,
    getLearnerAttendanceByReportId, 
    createLearnerAttendance, 
    updateLearnerAttendance, 
    deleteLearnerAttendance, 
    getLearnerAttendanceById } = require('../controllers/learner_attendance.controller');
const { fieldValidators } = require('../middlewares/field.validators');
const { validateJWT } = require('../middlewares/validate.jwt');


const router = Router();

router.get('/learner_attendance/report/:report_id', validateJWT, getLearnerAttendanceByReportId);

router.get('/learner_attendance', validateJWT, getLearnerAttendance);

router.get('/learner_attendance/:id_learner_attendance', validateJWT, getLearnerAttendanceById);

router.post('/learner_attendance', [
    check('report_id', 'Report id is required').not().isEmpty(),
    check('roll','Roll is required').not().isEmpty(),
    check('actuall_attendance','Actuall attendance is required').not().isEmpty(),
    check('grade','Grade is required').not().isEmpty(),
    check('percentage_attendance','Percentage attendance is required').not().isEmpty(),
    fieldValidators
], validateJWT, createLearnerAttendance);

router.put('/learner_attendance/:id_learner_attendance', [
    check('report_id').not().isEmpty().withMessage('Report id is required'),
    check('roll').not().isEmpty().withMessage('Roll is required'),
    check('actuall_attendance').not().isEmpty().withMessage('Actuall attendance is required'),
    check('percentage_attendance').not().isEmpty().withMessage('Percentage attendance is required')
], validateJWT, updateLearnerAttendance);

router.delete('/learner_attendance/:id_learner_attendance', validateJWT, deleteLearnerAttendance);

module.exports = router;