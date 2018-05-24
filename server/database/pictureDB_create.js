var mongoose = require('mongoose');
const config = require('../config/database')

var Schema = mongoose.Schema;

mongoose.connect(config.database);
var conn = mongoose.connection;
var path = require('path');

var Grid = require('gridfs-stream');

var fs = require('fs');

const pic1Path = path.join(__dirname, '../resources/pictures/monks.jpg');
const pic2Path = path.join(__dirname, '../resources/pictures/shellAndSee.jpg');


// remettre le fichier avec les medias que j'ai enleve pr pas que ce soit trop lourd pr github
// /Users/gregoirenedelec/Documents/Gregoire Docs/MyC/mediaFiles

Grid.mongo = mongoose.mongo;

conn.once('open', function () {
    console.log('- connection open -');
    var gfs = Grid(conn.db);

    const optionsPic1 = {
        filename: 'monks.jpg', // a filename
    };
    const pic1 = gfs.createWriteStream(optionsPic1);

    const optionsPic2 = {
        filename: 'shellAndSee.jpg', // a filename
    };
    const pic2 = gfs.createWriteStream(optionsPic2);

    fs.createReadStream(pic1Path).pipe(pic1);
    fs.createReadStream(pic2Path).pipe(pic2);

    pic1.on('close', function (file) {
        console.log(file.filename + 'Written to DB');
    });
    pic2.on('close', function (file) {
        console.log(file.filename + 'Written to DB');
    });
    
});