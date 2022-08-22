const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {

    //read the token from the headers
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).json({
            ok: false,
            message: 'No token provided'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
       
    } catch (error) {
        return res.status(401).json({
            ok: false,
            message: 'Token invalid'
        });
    }

next()
}



module.exports = { validateJWT }