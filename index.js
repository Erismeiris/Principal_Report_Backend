const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {dbConnectMySQL, sequelize} = require('./config/mysql');




//create express app
const app = express();

const mysql = require('mysql'); 
const bodyParser = require('body-parser');

// create connection to database
dbConnectMySQL();

//cors setting
app.use(cors());

//read data from body
app.use(bodyParser.json());


//create a route for get request
const port = process.env.PORT || 3000;



// routes for district

app.get('/district', require('./routes/district.routes'));
app.get('/district/:id_district', require('./routes/district.routes'));
app.post('/district', require('./routes/district.routes'));
app.put('/district/:id_district', require('./routes/district.routes'));
app.delete('/district/:id_district', require('./routes/district.routes'));


// routes for school

app.get('/school', require('./routes/school.routes'));
app.post('/login_school', require('./routes/school.routes'));
app.get('/school/:id_school', require('./routes/school.routes'));
app.post('/school', require('./routes/school.routes'));
app.put('/school/:id_school', require('./routes/school.routes'));
app.delete('/school/:id_school', require('./routes/school.routes'));

//route for user
app.get('/renew', require('./routes/user.routes'));
app.get('/user', require('./routes/user.routes'));
app.post('/login', require('./routes/user.routes'));
app.post('/register', require('./routes/user.routes'));

// routes for report
app.get('/report', require('./routes/report.routes'));
app.get('/report/:id_report', require('./routes/report.routes'));
app.post('/report', require('./routes/report.routes'));
app.put('/report/:id_report', require('./routes/report.routes'));
app.delete('/report/:id_report', require('./routes/report.routes'));
app.get('/reportBySchoolId/:school_id', require('./routes/report.routes'));

// routes for learner_attendance
app.get('/learner_attendance', require('./routes/learner_attendance.routes'));
app.get('/learner_attendance/:id_learner_attendance', require('./routes/learner_attendance.routes'));
app.get('/learner_attendance/report/:report_id', require('./routes/learner_attendance.routes'));
app.post('/learner_attendance', require('./routes/learner_attendance.routes'));
app.put('/learner_attendance/:id_learner_attendance', require('./routes/learner_attendance.routes'));
app.delete('/learner_attendance/:id_learner_attendance', require('./routes/learner_attendance.routes'));


// routes for teacher_attendance
app.get('/teacher_attendance_by_report_id/:report_id', require('./routes/teacher_attendance.routes'));
app.get('/teacher_attendance', require('./routes/teacher_attendance.routes'));
app.post('/teacher_attendance', require('./routes/teacher_attendance.routes'));
app.delete('/teacher_attendance/:id_teacher_attendance', require('./routes/teacher_attendance.routes'));


// routes for curriculum_coverage
app.get('/curriculum_coverage', require('./routes/curriculum_coverage.routes'));
app.get('/curriculum_coverageByReportId/:report_id', require('./routes/curriculum_coverage.routes'));
app.post('/curriculum_coverage', require('./routes/curriculum_coverage.routes'));
app.delete('/curriculum_coverage/:id_curriculum_coverage', require('./routes/curriculum_coverage.routes'));

// routes fro sba
app.get('/sba', require('./routes/sba.routes'));
app.get('/sba/:report_id', require('./routes/sba.routes'));
app.post('/sba', require('./routes/sba.routes'));
app.delete('/sba/:id_sba', require('./routes/sba.routes'));


// routes for support.learners
app.get('/support_learners', require('./routes/supports.learners.routes'));
app.get('/support_learners/:report_id', require('./routes/supports.learners.routes'));
app.post('/support_learners', require('./routes/supports.learners.routes'));
app.delete('/support_learners/:id_support_learners', require('./routes/supports.learners.routes'));

//routes for support_given_to_learners
app.get('/support_given_to_learners/:report_id', require('./routes/support_given_to_learners.routes'));
app.get('/support_given_to_learners', require('./routes/support_given_to_learners.routes'));
app.post('/support_given_to_learners', require('./routes/support_given_to_learners.routes'));
app.delete('/support_given_to_learners/:id_support_given_to_learners', require('./routes/support_given_to_learners.routes'));

//routes for curriculum_record
app.get('/curriculum_record', require('./routes/curriculum_record.routes'));
app.get('/curriculum_recordByReportId/:report_id', require('./routes/curriculum_record.routes'));
app.post('/curriculum_record', require('./routes/curriculum_record.routes'));
app.delete('/curriculum_record/:id_curriculum_record', require('./routes/curriculum_record.routes'));


//routes for intervention_strategies
app.get('/intervention_strategies', require('./routes/intervention_strategies.routes'));
app.get('/intervention_strategies/:report_id', require('./routes/intervention_strategies.routes'));
app.post('/intervention_strategies', require('./routes/intervention_strategies.routes'));
app.delete('/intervention_strategies/:id_intervention_strategies', require('./routes/intervention_strategies.routes'));


//routes for extracurricular_activities
app.get('/extracurricular_activities', require('./routes/extracurricular_activities.routes'));
app.get('/extracurricular_activities/:report_id', require('./routes/extracurricular_activities.routes'));
app.post('/extracurricular_activities', require('./routes/extracurricular_activities.routes'));
app.delete('/extracurricular_activities/:id_extracurricular_activities', require('./routes/extracurricular_activities.routes'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

