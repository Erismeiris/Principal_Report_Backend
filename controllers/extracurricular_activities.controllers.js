const {response} = require('express');
const {sequelize} = require('../config/mysql');


const getExtracurricular_activities = async (req, res = response) => {
    const sql = `SELECT * FROM extracurricular_activities`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});
        res.json({
            ok: true,
            message: 'extracurricular_activities retrieved successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error retrieving extracurricular_activities',
            error
        });
    }
}


const getExtracurricular_activitiesByReportId = async (req, res = response) => {
    const {report_id} = req.params;
    const sql = `SELECT * FROM extracurricular_activities WHERE report_id = ${report_id}`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});
        res.json({
            ok: true,
            message: 'extracurricular_activities retrieved successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error retrieving extracurricular_activities',
            error
        });
    }
}

const createExtracurricular_activities = async (req, res = response) => {
    const {report_id, activity_date, activity, learner_involved} = req.body;
    const sql = `INSERT INTO extracurricular_activities (report_id, activity_date, activity, learner_involved) VALUES ('${report_id}', '${activity_date}', '${activity}', '${learner_involved}')`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.INSERT});
        res.json({
            ok: true,
            message: 'extracurricular_activities created successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error creating extracurricular_activities',
            error
        });
    }
}


const deleteExtracurricular_activities = async (req, res = response) => {
    const {id_extracurricular_activities} = req.params;
    const sql = `DELETE FROM extracurricular_activities WHERE id_extracurricular_activities = ${id_extracurricular_activities}`;
    try {
        const result = await sequelize.query(sql, {type: sequelize.QueryTypes.DELETE});
        res.json({
            ok: true,
            message: 'extracurricular_activities deleted successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error deleting extracurricular_activities',
            error
        });
    }
}





module.exports = {
    getExtracurricular_activities,
    getExtracurricular_activitiesByReportId,
    createExtracurricular_activities,
    deleteExtracurricular_activities
}