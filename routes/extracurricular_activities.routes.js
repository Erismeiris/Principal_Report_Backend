const {Router} = require('express')
const {check} = require('express-validator');
const {fieldValidators} = require('../middlewares/field.validators');
const {validateJWT} = require('../middlewares/validate.jwt');
const {getExtracurricular_activities, getExtracurricular_activitiesByReportId, createExtracurricular_activities,
    deleteExtracurricular_activities
} = require('../controllers/extracurricular_activities.controllers')
const router = Router()


router.get('/extracurricular_activities', validateJWT, getExtracurricular_activities)

router.get('/extracurricular_activities/:report_id', validateJWT, getExtracurricular_activitiesByReportId)


router.post('/extracurricular_activities', [
    validateJWT,
    check('report_id', 'Report id is required').not().isEmpty(),
    check('activity_date', 'Activity date is required').not().isEmpty(),
    check('activity', 'Activity is required').not().isEmpty(),
    check('learner_involved', 'Learner involved is required').not().isEmpty(),
    fieldValidators], 
    createExtracurricular_activities);

router.delete('/extracurricular_activities/:id_extracurricular_activities', validateJWT, deleteExtracurricular_activities)



module.exports = router