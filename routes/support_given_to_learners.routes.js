const {Router} = require('express');
const{check} = require('express-validator');
const {validateJWT} = require('../middlewares/validate.jwt');
const { fieldValidators } = require('../middlewares/field.validators');
const {getSupportGivenToLearnersByReportId, getSupporGivenToLearner, createSupportGivenToLearner, deleteSupportGivenToLearner} = require('../controllers/support_given_to_learners.controller');

const router = Router();


router.get('/support_given_to_learners/:report_id',validateJWT, getSupportGivenToLearnersByReportId);

router.get('/support_given_to_learners',validateJWT, getSupporGivenToLearner);

router.post('/support_given_to_learners',validateJWT,[
    check('report_id', 'report_id is required').not().isEmpty(),
], fieldValidators, createSupportGivenToLearner);

router.delete('/support_given_to_learners/:id_support_given_to_learners',validateJWT, deleteSupportGivenToLearner);













module.exports = router;