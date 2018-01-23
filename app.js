const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./server/config/database');


// Connect To Database
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect(config.database)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// On Connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database' + config.database);
});

// On Eror
mongoose.connection.on('error', (err)=>{
    console.log('Database error' + err);
});

const app = express();

const usersAuth = require('./server/usersAuth_route');


// Port Number
// const port = 3000;      // dev
const port = process.env.PORT || 8080;  //prod

//CORS middleware
app.use(cors());

// Set static folder
// app.use(express.static(path.join(__dirname, './angular-src/dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser middleware
app.use(bodyParser.json());
app.use('/usersAuth', usersAuth);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});