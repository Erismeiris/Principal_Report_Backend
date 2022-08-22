
const { response } = require('express');
const bcrypt = require('bcryptjs');	//import bcrypt
const {sequelize} = require('../config/mysql');
const jwt = require('jsonwebtoken');
const { generarJWT } = require('../../Contenedor/contenedor-backend-server/helpers/jwt');




const getUser = async (req, res) => {
    const sql = 'SELECT * FROM user';
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(user => {
        res.json(user);
    }   )   .catch(err => { console.log(err) });        //catch error   
};

const login = async (req, res = response) => {
   const { email, password } = req.body;
    const sql = `SELECT * FROM user WHERE email = '${email}'`;
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(user => {
        if(user.length > 0){
            if(bcrypt.compareSync(password, user[0].password)){
                const uid = {user:user[0]._id, rol:user[0].rol};                
                const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn: '24h' });
                res.json({
                    ok:true,
                    user,
                    token:token
                });
             }else{
                res.status(400).json({
                msg: 'Password is incorrect'
                });
            }
        }else{
            res.status(400).json({
                msg: 'Email is incorrect'
            });
        }
    }
   
    )   .catch(err => { console.log(err) });        //catch error
}



//create user
const createUser = async (req, res = response) => {
    try {
        const { user_name, email, password, rol } = req.body;
        const hash = await bcrypt.hash(password, 10);
       const sql = 'INSERT INTO user (user_name, email, password, rol) VALUES (?,?,?,?)';  
        sequelize.query(sql, { replacements: [user_name, email, hash, rol] })
        .then(user => {
            res.json(user);
        }   )   .catch(err => { console.log(err) });        //catch error
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Server error' });
    }
}


const renewToken = async(req, res = response)=>{
    const uid = req.uid

    //Generate a token - JWT
    const token = await generarJWT(uid);

    res.json({
        ok:true,
        token:token
    });
}


    





module.exports = {
    getUser,
    login,
    createUser,
    renewToken,
}
