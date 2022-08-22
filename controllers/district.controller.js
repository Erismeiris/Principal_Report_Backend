
const District = require('../models/district.model');
const {sequelize} = require('../config/mysql');



/* const getDistrict = async (req, res) => {
    const district = await District.findAll();
    res.json(district);
} */

const getDistrict = (req, res) => {
    const sql = 'SELECT * FROM district';
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(district => {
        res.json(district);
    }   )   .catch(err => { console.log(err) });        //catch error   
};

const getDistrictById = async (req, res) => {
    const id_district = req.params.id_district;
    const sql = 'SELECT * FROM district WHERE id_district = ?';
    const values = [id_district];
    sequelize.query(sql, { replacements: values })  
    .then(district => {
        res.json(district);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const createDistrict = async (req, res) => {
    const sql = 'INSERT INTO district (district_name, province) VALUES (?, ?)';	//sql query
    const values = [req.body.district_name, req.body.province];	//values to insert  
    sequelize.query(sql, { replacements: values })	//execute query with values
    .then(district => {
        res.json(district);
    }   )   .catch(err => { console.log(err) });        //catch error       

}


const updateDistrict = async (req, res) => {    
    const id_district = req.params.id_district;
   const sql = 'UPDATE district SET district_name = ?, province = ? WHERE id_district = ?';
    const values = [req.body.district_name, req.body.province, id_district];
    sequelize.query(sql, { replacements: values })  
    .then(district => {
        res.json(district);
    }   )   .catch(err => { console.log(err) });        //catch error

}

const deleteDistrict = async (req, res) => {
    const id_district = req.params.id_district;
   const sql = 'DELETE FROM district WHERE id_district = ?';
    const values = [id_district];   
    sequelize.query(sql, { replacements: values })  
    .then(district => {
        res.json(district);
    }   )   .catch(err => { console.log(err) });        //catch error       
    
}



module.exports = {getDistrict, createDistrict, updateDistrict, deleteDistrict, getDistrictById};