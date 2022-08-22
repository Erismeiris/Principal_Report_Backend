const School = require('../models/school.model');
const {sequelize,dbConnectMySQL} = require('../config/mysql');
const { response } = require('express');

const getSchool = async (req, res) => {
    const sql = 'SELECT * FROM school S LEFT JOIN district D ON S.id_district = D.id_district';
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(school => {
        res.json(school);
    }   )   .catch(err => { console.log(err) });        //catch error   
};

const getSchoolById = async (req, res) => {
    const id_school = req.params.id_school;
    const sql = 'SELECT * FROM school WHERE id_school = ?';
    const values = [id_school];
    sequelize.query(sql, { replacements: values })  
    .then(school => {
        res.json(school[0]);
    }   )   .catch(err => { console.log(err) });        //catch error
    
};

const createSchool = (req, res) => {
    const sql = 'INSERT INTO school (id_district, school_name, principal_name, grades, password) VALUES (?, ?, ?, ?, ?)';	//sql query
    const values = [req.body.id_district, req.body.school_name, req.body.principal_name, req.body.grades, req.body.password];	//values to insert  
    sequelize.query(sql, { replacements: values })	//execute query with values
    .then(school => {
        res.json(school);
    }   )   .catch(err => { console.log(err) });        //catch error       
};

const updateSchool = async(req, res) => {
    const id_school = req.params.id_school;
    const sql = 'UPDATE school SET id_district = ?, school_name = ?, principal_name = ?, grades = ? WHERE id_school = ?';	//sql query
    const values = [req.body.id_district, req.body.school_name, req.body.principal_name, req.body.grades, id_school];	//values to insert
    sequelize.query(sql, { replacements: values })	//execute query with values
    .then(school => {
        res.json(school);
    }   )   .catch(err => { console.log(err) });        //catch error
};

const deleteSchool = (req, res) => {  
    const id_school = req.params.id_school;
    const sql = 'DELETE FROM school WHERE id_school = ?';
    const values = [id_school];   
    sequelize.query(sql, { replacements: values })  
    .then(school => {
        res.json(school);
    }   )   .catch(err => { console.log(err) });        //catch error        
};


const schoolLogin = async (req, res=response) => {
    const {school_name, password} = req.body;
    const sql = `SELECT * FROM school WHERE school_name = '${school_name}' AND password = '${password}'`;
    
    try {
        if(!school_name || !password) {
            return res.status(400).json({
                message: 'Please enter all fields'
            });
        }
        const school = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        if(school.length === 0) {
            return res.status(400).json({
                ok: false,
                msg: 'Invalid credentials'
            });
        }
        return res.status(200).json({
            msg: 'Login successful',
            ok: true,
            school
        });
        
    } catch (error) {
        return res.status(500).json({
            msg: 'Something went wrong'
        });

        
    }
            
      
          //catch error
}


module.exports = {
    getSchool,
    getSchoolById,
    createSchool,
    updateSchool,
    deleteSchool,
    schoolLogin
}


