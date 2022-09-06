const {Router} = require('express');
const{check} = require('express-validator');
const { fieldValidators } = require('../middlewares/field.validators');
const { validateJWT } = require('../middlewares/validate.jwt');
const {getCurriculumCoverage, getCurriculumCoverageByReportId, createCurriculum_coverage, deleteCurriculum_coverage} = require('../controllers/curriculum_coverage.controller');


const router = Router();

router.get('/curriculum_coverage', validateJWT, getCurriculumCoverage);

router.get('/curriculum_coverageByReportId/:report_id', validateJWT, getCurriculumCoverageByReportId);


router.post('/curriculum_coverage',
[
check('report_id', 'The report id is compulsory').not().isEmpty(),
fieldValidators
],validateJWT,createCurriculum_coverage);

router.delete('/curriculum_coverage/:id_curriculum_coverage',validateJWT,deleteCurriculum_coverage);


module.exports = router;