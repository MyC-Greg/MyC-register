const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config/database')

const Article = require('../models/article_model');

const GDEArticles = require('../resources/articles/GDEArticles');
const APArticles = require('../resources/articles/APArticles');
const nutritionArticles = require('../resources/articles/nutritionArticles');


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
      
      const mycArticles = [APArticles, GDEArticles, nutritionArticles].reduce((a,b) => {
        return a.concat(b);
    },[]);

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
            await Article.insertMany(mycArticles);
           
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
                    Picture.findById({ _id: "5b08516eb79191540ecae87a"}, function(err, picture) {
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

                    Picture.findById({ _id: "5b08516eb79191540ecae87b"}, function(err, picture) {
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

                    Picture.findById({ _id: "5b08516eb79191540ecae87d"}, function(err, picture) {
                        if (err) {
                            console.log('error in finding picture', err)
                        }
                    if (!picture) {
                            console.log('no picture found')
                        }
                    }).then((picture) => {
                        if(picture) {
                            if(article.title === 'Nutrition pendant le cancer') {
                                console.log('Media found', picture)
                                article.img = picture;
                                article.save();
                            }
                        }  
                    });

                    Picture.findById({ _id: "5b08516eb79191540ecae87c"}, function(err, picture) {
                        if (err) {
                            console.log('error in finding picture', err)
                        }
                    if (!picture) {
                            console.log('no picture found')
                        }
                    }).then((picture) => {
                        if(picture) {
                            if(article.title === 'Alimentation, nutrition et cancer') {
                                console.log('Media found', picture)
                                article.img = picture;
                                article.save();
                            }
                        }  
                    });

                    Picture.findById({ _id: "5b08516eb79191540ecae878"}, function(err, picture) {
                        if (err) {
                            console.log('error in finding picture', err)
                        }
                    if (!picture) {
                            console.log('no picture found')
                        }
                    }).then((picture) => {
                        if(picture) {
                            if(article.title === 'Les bienfaits de la méditation') {
                                console.log('Media found', picture)
                                article.img = picture;
                                article.save();
                            }
                        }  
                    });

                    Picture.findById({ _id: "5b08516eb79191540ecae879"}, function(err, picture) {
                        if (err) {
                            console.log('error in finding picture', err)
                        }
                    if (!picture) {
                            console.log('no picture found')
                        }
                    }).then((picture) => {
                        if(picture) {
                            if(article.title === 'Les bienfaits de la méditation - cancer colorectal') {
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
