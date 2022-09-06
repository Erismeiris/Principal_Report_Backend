const {Router} = require('express');
const{check} = require('express-validator');
const {getSba, getSbaByReportId, createSba, deleteSba} = require('../controllers/sba.controller');
const {validateJWT} = require('../middlewares/validate.jwt');
const { fieldValidators } = require('../middlewares/field.validators');

const router = Router();

router.get('/sba', validateJWT, getSba);

router.get('/sba/:report_id', validateJWT, getSbaByReportId);

router.post('/sba',validateJWT, 
[   check('report_id', 'The id of report is compulsory').not().isEmpty(),
    check('grade', 'The grade of sba is compulsory').not().isEmpty(),
    check('term', 'The term of sba is compulsory').not().isEmpty(),
    check('task', 'The task of sba is compulsory').not().isEmpty(),
],fieldValidators, createSba);


router.delete('/sba/:id_sba', deleteSba);



module.exports = router;