"use strict";
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
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require("./dist/server/main.bundle");
import { join } from 'path';
import { readFileSync } from 'fs';
import { enableProdMode } from '@angular/core';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

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
const PORT = process.env.PORT || 8080;  //prod
const DIST_FOLDER = join(process.cwd(), 'dist');

//CORS middleware
app.use(cors());

// Body Parser middleware
app.use(bodyParser.json());
app.use('/usersAuth', usersAuth);


const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

app.engine('html', ngUniversal.ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});