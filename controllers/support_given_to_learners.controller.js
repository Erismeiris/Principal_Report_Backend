const { response } = require('express');
const {sequelize} = require('../config/mysql');



const getSupportGivenToLearnersByReportId = async (req, res=response) => {
    const {report_id} = req.params;
    const sql = 'SELECT * FROM support_given_to_learners WHERE report_id = ?';
    sequelize.query(sql, { replacements: [report_id], type: sequelize.QueryTypes.SELECT })
    .then(support_given_to_learners => {
        res.json(support_given_to_learners);
    }   )   .catch(err => { console.log(err) });        //catch error
}



const getSupporGivenToLearner = async (req, res=response) => {
    const sql = 'SELECT * FROM support_given_to_learners';
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(support_given_to_learners => {
        res.json(support_given_to_learners);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const createSupportGivenToLearner = async (req, res=response) => {
    const {report_id, orphaned, households, teenage_pregnancy, 
        receiving_support_at_school, referred_to_DBST, cases_successfully_closed, 
        living_with_disabilities} = req.body;
    const sql = 'INSERT INTO support_given_to_learners (report_id, orphaned, households, teenage_pregnancy, receiving_support_at_school, referred_to_DBST, cases_successfully_closed, living_with_disabilities) VALUES (?,?,?,?,?,?,?,?)';
    sequelize.query(sql, { replacements: [report_id, orphaned, households, teenage_pregnancy, receiving_support_at_school, referred_to_DBST, cases_successfully_closed, living_with_disabilities], type: sequelize.QueryTypes.INSERT })
    .then(support_given_to_learners => {
        res.json(support_given_to_learners);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const deleteSupportGivenToLearner = async (req, res=response) => {
    const {id_support_given_to_learners} = req.params;
    const sql = 'DELETE FROM support_given_to_learners WHERE id_support_given_to_learners = ?';
    sequelize.query(sql, { replacements: [id_support_given_to_learners], type: sequelize.QueryTypes.DELETE })
    .then(support_given_to_learners => {
        res.json(support_given_to_learners);
    }   )   .catch(err => { console.log(err) });        //catch error
}









module.exports = {
    getSupportGivenToLearnersByReportId,
    getSupporGivenToLearner,
    createSupportGivenToLearner,
    deleteSupportGivenToLearner
}