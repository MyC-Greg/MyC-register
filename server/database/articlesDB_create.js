const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config/database')

const Article = require('../models/article_model');

const GDAArticles = require('../resources/articles/GDAarticles');

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
            await Article.remove({}, function(err, row) {
                if (err) {
                    console.log("Articles couldn't be removed" + err);
                    return;
                }
              
                console.log("Articles removed");
              });
            
        } catch(error) {
        console.log('error on deleting databases', error)
        };

        try {
            await Article.insertMany(GDAArticles);
           
        } catch(error) {
            console.log('error on creating databases', error)
        };

        try {
            await Article.find({}, function(err,data) {
                if(err) {
                    console.log("Articles couldn't be found");
                    return;
                }
                console.log('Articles found')
            })
            .then((articles) => {
                articles.map(article => {
                    Picture.findById({ _id: "5b06789e4187ee13881ad80f"}, function(err, picture) {
                        if (err) {
                            console.log('error in finding picture', err)
                        }
                    if (!picture) {
                            console.log('no picture found')
                        }
                    }).then((picture) => {
                        if(picture) {
                            if(article.title === 'Pourquoi l\'Activité Physique va vous faire sauter au plafond!') {
                                console.log('Media found', picture)
                                article.img = picture;
                                article.save();
                            }
                        }  
                    });

                    Picture.findById({ _id: "5b06789e4187ee13881ad810"}, function(err, picture) {
                        if (err) {
                            console.log('error in finding picture', err)
                        }
                    if (!picture) {
                            console.log('no picture found')
                        }
                    }).then((picture) => {
                        if(picture) {
                            if(article.title === 'Financée grâce à la Rochambelle, la sophrologie aide des malades du cancer à se sentir mieux') {
                                console.log('Media found', picture)
                                article.img = picture;
                                article.save();
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
