const Report = require('../models/report.model');
const { response } = require('express');
const {sequelize} = require('../config/mysql');


const getReport = async (req, res = response) => {
    const sql = 'SELECT * FROM report';
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then(report => {
        res.json(report);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const getReportBySchoolId = async (req, res=response) => {
    const {school_id} = req.params;
    const sql = 'SELECT * FROM report WHERE school_id = ? Order By report_month DESC';
    sequelize.query(sql, { replacements: [school_id], type: sequelize.QueryTypes.SELECT })
    .then(report => {
        res.json(report);
    }   )   .catch(err => { console.log(err) });        //catch error
}


const getReportById = async (req, res=response) => {
    const id_report = req.params.id_report;
    const sql = 'SELECT * FROM report WHERE id_report = ?';
    const values = [id_report];
    sequelize.query(sql, { replacements: values })  
    .then(report => {
        res.json(
            {
                ok:true,
                msg:'Report found',
                report
                
            });
    }   )   .catch(err => { console.log(err) });        //catch error
}



const createReport = async (req, res=response) => {
    const sql = 'INSERT INTO report (school_id, report_month, report_name) VALUES (?, ?, ?)';	//sql query
    const values = [req.body.school_id, req.body.report_month, req.body.report_name];	//values to insert  
    sequelize.query(sql, { replacements: values })	//execute query with values
    .then(report => {
        res.json(report);
    }   )   .catch(err => { console.log(err) });        //catch error       
}

const updateReport = async (req, res=response) => {
    const id_report = req.params.id_report;
    const sql = 'UPDATE report SET school_id = ?, report_month = ? WHERE id_report = ?';
    const values = [req.body.school_id, req.body.report_month, id_report];
    sequelize.query(sql, { replacements: values })  
    .then(report => {
        res.json(report);
    }   )   .catch(err => { console.log(err) });        //catch error
}

const deleteReport = async (req, res=response) => {
    const id_report = req.params.id_report;
    const sql = 'DELETE FROM report WHERE id_report = ?';
    const values = [id_report];   
    sequelize.query(sql, { replacements: values })  
    .then(report => {
        res.json(report);
    }   )   .catch(err => { console.log(err) });        //catch error       
}



module.exports = {
    getReport,
    getReportById,
    createReport,
    updateReport,
    deleteReport,
    getReportBySchoolId
}

