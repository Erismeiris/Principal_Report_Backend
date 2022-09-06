const {Router} = require('express');
const{check} = require('express-validator');
const {getDistrict, createDistrict, updateDistrict, deleteDistrict, getDistrictById} = require('../controllers/district.controller');
const { validateJWT } = require('../middlewares/validate.jwt');




const router = Router();

router.get('/district', getDistrict);

router.get('/district/:id_district', getDistrictById);

router.post('/district', 
[check('district_name').not().isEmpty(), 
check('province').not().isEmpty()], 
createDistrict);


router.put('/district/:id_district',
[check('district_name').not().isEmpty(),
check('province').not().isEmpty()],
updateDistrict);

router.delete('/district/:id_district', deleteDistrict);




module.exports = router;