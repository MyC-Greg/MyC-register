var mongoose = require('mongoose');
const config = require('../config/database')

var Schema = mongoose.Schema;

mongoose.connect(config.database);
var conn = mongoose.connection;
var path = require('path');

var Grid = require('gridfs-stream');

var fs = require('fs');

const monksPath = path.join(__dirname, '../resources/pictures/monks.jpg');
const shellAndSeePath = path.join(__dirname, '../resources/pictures/shellAndSee.jpg');
const iceClimbingPath = path.join(__dirname, '../resources/pictures/iceClimbing.jpg');
const kayakPath = path.join(__dirname, '../resources/pictures/kayak.jpg');
const smoothiesPath = path.join(__dirname, '../resources/pictures/smoothies.jpg');
const veggiesPath = path.join(__dirname, '../resources/pictures/veggies.jpg');


// remettre le fichier avec les medias que j'ai enleve pr pas que ce soit trop lourd pr github
// /Users/gregoirenedelec/Documents/Gregoire Docs/MyC/mediaFiles

Grid.mongo = mongoose.mongo;

conn.once('open', function () {
    console.log('- connection open -');
    var gfs = Grid(conn.db);

    const optionsPic1 = {
        filename: 'monks.jpg', // a filename
    };
    const optionsPic2 = {
        filename: 'shellAndSee.jpg', // a filename
    };
    const optionsPic3 = {
        filename: 'iceClimbing.jpg', // a filename
    };
    const optionsPic4 = {
        filename: 'kayak.jpg', // a filename
    };
    const optionsPic5 = {
        filename: 'smoothies.jpg', // a filename
    };
    const optionsPic6 = {
        filename: 'veggies.jpg', // a filename
    };

    const monks = gfs.createWriteStream(optionsPic1);
    const shellAndSee = gfs.createWriteStream(optionsPic2);
    const iceClimbing = gfs.createWriteStream(optionsPic3);
    const kayak = gfs.createWriteStream(optionsPic4);
    const smoothies = gfs.createWriteStream(optionsPic5);
    const veggies = gfs.createWriteStream(optionsPic6);


    fs.createReadStream(monksPath).pipe(monks);
    fs.createReadStream(shellAndSeePath).pipe(shellAndSee);
    fs.createReadStream(iceClimbingPath).pipe(iceClimbing);
    fs.createReadStream(kayakPath).pipe(kayak);
    fs.createReadStream(smoothiesPath).pipe(smoothies);
    fs.createReadStream(veggiesPath).pipe(veggies);

    monks.on('close', function (file) {
        console.log(file.filename + 'Written to DB');
    });
    shellAndSee.on('close', function (file) {
        console.log(file.filename + 'Written to DB');
    });
    iceClimbing.on('close', function (file) {
        console.log(file.filename + 'Written to DB');
    });
    kayak.on('close', function (file) {
        console.log(file.filename + 'Written to DB');
    });
    smoothies.on('close', function (file) {
        console.log(file.filename + 'Written to DB');
    });
    veggies.on('close', function (file) {
        console.log(file.filename + 'Written to DB');
    });
});