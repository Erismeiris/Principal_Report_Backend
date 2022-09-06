const { response } = require('express');
const {sequelize} = require('../config/mysql');



const createSupportLerner = async (req, res=response) => {
    const sql = 'INSERT INTO support_learners (report_id,no_learners_special_education,grade_remedial, number_remedial, grade_integrated, number_integrated) VALUES (?,?,?, ?, ?, ?)';	//sql query
    const values = [req.body.report_id,req.body.no_learners_special_education ,req.body.grade_remedial, req.body.number_remedial, req.body.grade_integrated, req.body.number_integrated];	//values to insert  
    sequelize.query(sql, { replacements: values })	//execute query with values
    .then(support_learners => {
        res.json(support_learners);
    }   )   .catch(err => { console.log(err) });        //catch error       
}

const getSupportLearnersByReportId = async (req, res=response) => {
    const {report_id} = req.params;
    const sql = 'SELECT * FROM support_learners WHERE report_id = ?';
    sequelize.query(sql, { replacements: [report_id], type: sequelize.QueryTypes.SELECT })
    .then(support_learners => {
        res.json(support_learners);
    }   )   .catch(err => { console.log(err) });        //catch error
}


const getSupportLearners = async (req, res=response) => {
    const sql = 'SELECT * FROM support_learners';
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(support_learners => {
        res.json(support_learners);
    }   )   .catch(err => { console.log(err) });        //catch error
}


const deleteSupportLearners = async (req, res=response) => {
    const {id_support_learners} = req.params;
    const sql = 'DELETE FROM support_learners WHERE id_support_learners = ?';
    sequelize.query(sql, { replacements: [id_support_learners] })  
    .then(support_learners => {
        res.json(support_learners);
    }   )   .catch(err => { console.log(err) });        //catch error
}


module.exports = {
    createSupportLerner,
    getSupportLearnersByReportId,
    getSupportLearners,
    deleteSupportLearners
}