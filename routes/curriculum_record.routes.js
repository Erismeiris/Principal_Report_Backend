const {Router} = require('express');
const{check} = require('express-validator');
const { fieldValidators } = require('../middlewares/field.validators');
const { validateJWT } = require('../middlewares/validate.jwt');
const {getCurriculumRecord, getCurriculumRecordByReportId, createCurriculum_record, deleteCurriculum_record} = require('../controllers/curriculum_record.controller');


const router = Router();

router.get('/curriculum_record', validateJWT, getCurriculumRecord);

router.get('/curriculum_recordByReportId/:report_id', validateJWT, getCurriculumRecordByReportId);


router.post('/curriculum_record',
[
check('report_id', 'The report id is compulsory').not().isEmpty(),
fieldValidators
],validateJWT,createCurriculum_record);

router.delete('/curriculum_record/:id_curriculum_record',validateJWT,deleteCurriculum_record);


module.exports = router;
