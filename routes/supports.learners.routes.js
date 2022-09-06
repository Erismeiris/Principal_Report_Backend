const {Router} = require('express');
const{check} = require('express-validator');
const {validateJWT} = require('../middlewares/validate.jwt');
const { fieldValidators } = require('../middlewares/field.validators');
const { createSupportLerner, getSupportLearnersByReportId, getSupportLearners, deleteSupportLearners } = require('../controllers/supports_learners');


const router = Router();

router.post('/support_learners', [
    validateJWT,
    check('report_id', 'The report_id is required').not().isEmpty(),
    check('grade_remedial', 'The grade_remedial is required').not().isEmpty(),
    check('number_remedial', 'The number_remedial is required').not().isEmpty(),
    check('grade_integrated', 'The grade_integrated is required').not().isEmpty(),
    check('number_integrated', 'The number_integrated is required').not().isEmpty(),
    fieldValidators
], createSupportLerner);

router.get('/support_learners/:report_id', validateJWT,getSupportLearnersByReportId);

router.get('/support_learners', validateJWT, getSupportLearners);

router.delete('/support_learners/:id_support_learners', validateJWT, deleteSupportLearners);






module.exports = router;