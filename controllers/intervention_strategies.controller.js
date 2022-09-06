const {response} = require('express');
const {sequelize} = require('../config/mysql');
const Intervention_strategie = require('../models/intervention_strategie.model');


// Create and Save a new Intervenction_strategies
const createInterventionStrategies = async (req, res = response) => {
    const {report_id, grade,name_teacher, subject_underperforming, intervention_strategies, progress_in_month} = req.body;
    const sql = `INSERT INTO intervention_strategie (report_id, grade,name_teacher, subject_underperforming, intervention_strategies, progress_in_month) 
    VALUES (${report_id}, '${grade}','${name_teacher}', '${subject_underperforming}', '${intervention_strategies}', '${progress_in_month}')`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.INSERT});
        res.json({
            ok: true,
            message: 'Intervention Strategies created successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error creating Intervention Strategies',
            error
        });
    }
}

const getInterventionByReportId = async (req, res = response) => {
    const {report_id} = req.params;
    const sql = `SELECT * FROM intervention_strategie WHERE report_id = ${report_id}`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});
        res.json({
            ok: true,
            message: 'Intervention Strategies retrieved successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error retrieving Intervention Strategies',
            error
        });
    }
}

const getInterventionStrategies = async (req, res = response) => {
    const sql = `SELECT * FROM intervention_strategie`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});
        res.json({
            ok: true,
            message: 'Intervention Strategies retrieved successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error retrieving Intervention Strategies',
            error
        });
    }
}


const deleteInterventionStrategies = async (req, res = response) => {
    const {id_intervention} = req.params;
    const sql = `DELETE FROM intervention_strategie WHERE id_intervention = ${id_intervention}`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.DELETE});
        res.json({
            ok: true,
            message: 'Intervention Strategies deleted successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error deleting Intervention Strategies',
            error
        });
    }
}



module.exports = {
    createInterventionStrategies,
    getInterventionStrategies,
    getInterventionByReportId,
    deleteInterventionStrategies
}