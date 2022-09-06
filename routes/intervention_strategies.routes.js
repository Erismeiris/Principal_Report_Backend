const {Router} = require('express');
const {check} = require('express-validator');
const {fieldValidators} = require('../middlewares/field.validators');
const {validateJWT} = require('../middlewares/validate.jwt');
const {createInterventionStrategies,getInterventionStrategies, getInterventionByReportId,
    deleteInterventionStrategies} = require('../controllers/intervention_strategies.controller');


const router = Router();

router.post('/intervention_strategies', [
    validateJWT,
    check('report_id', 'Report id is required').not().isEmpty(),
    fieldValidators,
    createInterventionStrategies
]);

router.get('/intervention_strategies', validateJWT, getInterventionStrategies);

router.get('/intervention_strategies/:report_id', validateJWT, getInterventionByReportId);

router.delete('/intervention_strategies/:id_intervention', validateJWT, deleteInterventionStrategies);



module.exports = router;