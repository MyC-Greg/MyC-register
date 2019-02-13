
require('zone.js/dist/zone-node');
require('reflect-metadata');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./server/config/database');
const ngUniversal = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require("./dist-server/main.bundle");

function angularRouter(req, res) {
    res.render('index', {req, res});
}
// Connect To Database
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect(config.database)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// On Connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database' + config.database);
});

// On Error
mongoose.connection.on('error', (err)=>{
    console.log('Database error' + err);
});

const app = express();

const usersAuth = require('./server/usersAuth_route');


// Port Number
// const port = 3000;      // dev
const port = process.env.PORT || 3000;  //prod

//CORS middleware
app.use(cors());

// Body Parser middleware
app.use(bodyParser.json());
app.use('/usersAuth', usersAuth);


// Index Route
app.engine('html', ngUniversal.ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', 'dist')

app.get('/', angularRouter);

// Set static folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', angularRouter);

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});