const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config/database')

const Bio = require('../models/bio_model');

const bios = require('../resources/bios/bios');

const Picture = require('../models/picture_model');

const Grid = require('gridfs-stream');

mongoose.Promise = global.Promise;
// Grid.mongo = mongoose.mongo;
// var conn = mongoose.connection;

    mongoose.connect(config.database);
    mongoose.connection
      .once('open', () => console.log('connected to server on port 3000'))
      .on('error', (error) => {
        console.warn('Warning', error);
      });

      async function generateDatabase() {
        try {
            await Bio.remove({}, function(err, row) {
                if (err) {
                    console.log("Bios couldn't be removed" + err);
                    return;
                }
              
                console.log("Bios removed");
              });
            
        } catch(error) {
        console.log('error on deleting databases', error)
        };

        try {
            await Bio.insertMany(bios);
           
        } catch(error) {
            console.log('error on creating databases', error)
        };

        try {
            await Bio.find({}, function(err,data) {
                if(err) {
                    console.log("Bios couldn't be found");
                    return;
                }
                console.log('Bios found')
            })
            .then((bios) => {
                bios.map(bio => {
                    Picture.findById({ _id: "5b09944baa46ea3e0879c3dd"}, function(err, picture) {
                        if (err) {
                            console.log('error in finding picture', err)
                        }
                    if (!picture) {
                            console.log('no picture found')
                        }
                    }).then((picture) => {
                        if(picture) {
                            if(bio.names === 'Aliette et Jérôme Balladur') {
                                console.log('Media found', picture)
                                bio.img = picture;
                                bio.save();
                            }
                        }  
                    });

                    Picture.findById({ _id: "5b09944baa46ea3e0879c3de"}, function(err, picture) {
                        if (err) {
                            console.log('error in finding picture', err)
                        }
                    if (!picture) {
                            console.log('no picture found')
                        }
                    }).then((picture) => {
                        if(picture) {
                            if(bio.names === 'Charlotte Mahr et Grégoire Nedelec') {
                                console.log('Media found', picture)
                                bio.img = picture;
                                bio.save();
                            }
                        }  
                    });

                    Picture.findById({ _id: "5b09944baa46ea3e0879c3df"}, function(err, picture) {
                        if (err) {
                            console.log('error in finding picture', err)
                        }
                    if (!picture) {
                            console.log('no picture found')
                        }
                    }).then((picture) => {
                        if(picture) {
                            if(bio.names === 'Léa Dall\'Aglio et Vincent Guerrier') {
                                console.log('Media found', picture)
                                bio.img = picture;
                                bio.save();
                            }
                        }  
                    });    
                })
            })
        } catch (error) {
            console.log('error on creating databases', error)
        }
    }

    generateDatabase();
