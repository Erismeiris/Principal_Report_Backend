const { Router } = require('express');
const { check } = require('express-validator');
const { login, getUser, createUser, renewToken } = require('../controllers/user.controller');
const { fieldValidators } = require('../middlewares/field.validators');
const { validateJWT } = require('../middlewares/validate.jwt');




const router = Router();

router.post('/login',
    [
    check('email', 'The email is compulsory').isEmail(),
    check('password', 'The password is compulsory').isLength({ min: 6 }),
    fieldValidators
    ],
    login);

router.get('/user', getUser);

router.post('/register', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
    fieldValidators
], createUser);

router.get('/renew',validateJWT, renewToken);





module.exports = router;