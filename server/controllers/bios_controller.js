const mongoose = require('mongoose');
const fs = require ('fs');
const path = require('path');
var mongo = require('mongodb');
var Grid = require('gridfs-stream');
const database = require('../config/database')

const Picture = require('../models/picture_model');
const Bio = require('../models/bio_model');
  

module.exports = {

    getBios(req, res, next){
        // const role = req.params.role.toString();
                const getB = async () => {
                    try {
                        // {pilar: req.params.pilar.toString()}
                   const bios = await Bio.find({}, function( err, bios ) {
                    if (err) {
                            return res.status(500).json({
                                title: 'An error to find the bios occurred',
                                error: err
                            });
                        }
                        if (!bios) {
                            return res.status(500).json({
                                title: 'No bios was found',
                                error: {message: 'Bios not found'}
                            });
                        }
                    })
                    // .populate('img'); No need for populating here because of middleware PRE in model.

                    await res.status(200).json({
                        message: 'bios successfully retrieved',
                        obj: bios
                     })

                    } catch(error){
                        res.status(500).json({
                            message: 'General error',
                            error: error
                        });
                    }
                }
                getB();
    },

    getPictures(req, res, next){
        // console.log(id, typeof id)
        const id = req.params.id.toString();
        mongoose.connect(database.database);
        const conn = mongoose.connection;

        Grid.mongo = mongoose.mongo;

        conn.once('open', function () {
            console.log('- connection open -');
        var gfs = Grid(conn.db);

            const readstream = gfs.createReadStream({_id: id});

            readstream.pipe(res);

        })
    }
    
}