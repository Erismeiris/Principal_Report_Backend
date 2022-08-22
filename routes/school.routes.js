const {Router} = require('express');
const{check} = require('express-validator');
const {getSchool, createSchool, updateSchool, deleteSchool, getSchoolById, schoolLogin} = require('../controllers/school.controller');
const {validateJWT} = require('../middlewares/validate.jwt');
const { fieldValidators } = require('../middlewares/field.validators');



const router = Router();

router.get('/school',validateJWT, getSchool);

router.get('/school/:id_school', getSchoolById);

router.post('/login_school', schoolLogin);

router.post('/school',
[check('school_name', 'The name of school is compulsory').not().isEmpty(),
check('principal_name', 'The name of the school principal is compulsory').not().isEmpty(),
check('id_district', 'You must to select a district').not().isEmpty(),
check('grades', 'Dont see that you have grades selected').not().isEmpty(),
fieldValidators],
createSchool);


router.put('/school/:id_school', updateSchool);

router.delete('/school/:id_school',validateJWT,deleteSchool);

module.exports = router;