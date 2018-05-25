const mongoose = require('mongoose');
const fs = require ('fs');
const path = require('path');
var mongo = require('mongodb');
var Grid = require('gridfs-stream');
const database = require('../config/database')

const Picture = require('../models/picture_model');
const Article = require('../models/article_model');
  

module.exports = {

    getArticles(req, res, next){
        // const pilar = req.params.pilar.toString();
                const getArt = async () => {
                    try {
                   const articles = await Article.find({pilar: req.params.pilar.toString()}, function( err, articles ) {
                    if (err) {
                            return res.status(500).json({
                                title: 'An error to find the article occurred',
                                error: err
                            });
                        }
                        if (!articles) {
                            return res.status(500).json({
                                title: 'No article was found',
                                error: {message: 'Article not found'}
                            });
                        }
                    })
                    // .populate('img'); No need for populating here because of middleware PRE in model.

                    await res.status(200).json({
                        message: 'articles successfully retrieved',
                        obj: articles
                     })

                    } catch(error){
                        res.status(500).json({
                            message: 'General error',
                            error: error
                        });
                    }
                }
                getArt();
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
    },


    getArticle(req, res, next){
        const id = req.params.id;
        console.log(id, typeof id)
                const getArt = async () => {
                    try {
                   const article = await Article.findById({_id: id}, function( err, article ) {
                    if (err) {
                            return res.status(500).json({
                                title: 'An error to find the article occurred',
                                error: err
                            });
                        }
                        if (!article) {
                            return res.status(500).json({
                                title: 'No article was found',
                                error: {message: 'Article not found'}
                            });
                        }
                    })
                    // .populate('img'); No need for populating here because of middleware PRE in model.

                    await res.status(200).json({
                        message: 'articles successfully retrieved',
                        obj: article
                     })

                    } catch(error){
                        res.status(500).json({
                            message: 'General error',
                            error: error
                        });
                    }
                }
                getArt();
    }
    
}