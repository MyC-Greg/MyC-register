const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./server/config/database')

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



// Port Number
const port = 3000;

//CORS middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser middleware
app.use(bodyParser.json());

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});