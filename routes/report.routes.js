const { Router } = require('express');
const { check } = require('express-validator');
const { getReport, createReport, updateReport, deleteReport, getReportById } = require ('../controllers/report.controller');
const { fieldValidators } = require('../middlewares/field.validators');
const { validateJWT } = require('../middlewares/validate.jwt');


const router = Router();

router.get('/report', validateJWT, getReport);

router.get('/report/:id_report', getReportById);

router.post('/report',
[check('school_id', 'The id of school is compulsory').not().isEmpty(),
check('report_month', 'The month of report is compulsory').not().isEmpty()],
fieldValidators,
createReport);

router.put('/report/:id_report', updateReport);

router.delete('/report/:id_report', deleteReport);

module.exports = router;

