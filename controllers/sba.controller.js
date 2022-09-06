const { response } = require('express');
const {sequelize} = require('../config/mysql');

const getSba = async (req, res = response) => {
    const sql = 'SELECT * FROM sba';
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(sba => {
        res.json(sba);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const getSbaByReportId = async (req, res=response) => {
    const {report_id} = req.params;
    const sql = 'SELECT * FROM sba WHERE report_id = ?';
    sequelize.query(sql, { replacements: [report_id], type: sequelize.QueryTypes.SELECT })
    .then(sba => {
        res.json(sba);
    }   )   .catch(err => { console.log(err) });        //catch error
}


const createSba = async (req, res) => {
    const sql = 'INSERT INTO sba (report_id, grade, term, task) VALUES (?, ?, ?, ?)';	//sql query
    const values = [req.body.report_id, req.body.grade, req.body.term, req.body.task];	//values to insert  
    
    sequelize.query(sql, { replacements: values })	//execute query with values
    .then(sba => {
        res.json(sba);
    }   )   .catch(err => { console.log(err) });        //catch error       
}


const deleteSba = async (req, res) => {
    const id_sba = req.params.id_sba;
    const sql = 'DELETE FROM sba WHERE id_sba = ?';
    const values = [id_sba];
    sequelize.query(sql, { replacements: values })  
    .then(sba => {
        res.json(sba);
    }   )   .catch(err => { console.log(err) });        //catch error
}


module.exports = {
    getSba,
    getSbaByReportId,
    createSba,
    deleteSba
}