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




app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

