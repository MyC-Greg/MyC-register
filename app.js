const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./server/config/database');

// Connect to Database
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

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
// const port = 3000;
const port = process.env.PORT || 8080;

//CORS middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'dist')));

// Body Parser middleware
app.use(bodyParser.json());
// app.use('/usersAuth', usersAuth);
app.use('/', AppComponent);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});