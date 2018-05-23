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
        // console.log('req.params.Id', req.params.Id)
        // populate picture related to the required article
                const getArt = async () => {
                    try {
                   const articles = await Article.find({}, function( err, articles ) {
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
                    // .populate('img');
                    // console.log('articles', articles);

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

        mongoose.connect(database.database);
        const conn = mongoose.connection;
        // console.log(database.database)
        Grid.mongo = mongoose.mongo;

        conn.once('open', function () {
            console.log('- connection open -');
        var gfs = Grid(conn.db);

        // const getPic = async () => {
            // make sure the db instance is open before passing into `Grid`

            // try {
           const article =  Article.findById({ _id: "5b05a6e946c684519ab3b3c2"}, function( err, article ) {
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
            // .populate('img');

            // console.log('article', article)
            // var fs_write_stream = fs.createWriteStream(path.join(__dirname, './picg1.jpg'));
            // console.log(article.img)
            // const options = {title: article.title,
            //                             subTitle: article.subtitle,
            //                             content: article.content,
            //                             author: article.author};
            const readstream = gfs.createReadStream({_id: "5b05a38c6123814fcf56c9dc"});
            readstream.pipe(res);

        // } catch (error) {
        //             console.log(error)
        //         }
        // }
            // getPic();
        })
    }
}


            // if(req.headers.range) {
            //     console.log('------------------')
            //         console.log('ca passe par req.headers.range')
            //         var parts = req.headers.range.replace(/bytes=/, "").split("-");
            //         console.log('parts', parts)
            //         var partialstart = parts[0];
            //         var partialend = parts[1];
            //         console.log('partialstart and end',partialstart, partialend);
                    
            //         var start = parseInt(partialstart, 10);
            //         // if(start < activity.content.inspect().length*0.00084) { start = activity.content.inspect().length*0.00084}
            //         var end = partialend ? parseInt(partialend, 10) : article.img.inspect().length - 1;
            //         var chunksize = (end - start) + 1;
            //         console.log('start', start);            
            //         console.log('end', end);
            //         // console.log('chunksize', chunksize);
            //         console.log('article.img.inspect().chunkSize', article.img.inspect().chunkSize);
        
            //         console.log(
            //             {'Content-Length': start == end ? 0 : article.img.inspect().chunkSize},
            //             {'Content-Range': `bytes ${start}-${end}/${article.img.inspect().length}`});
        
            //         res.writeHead(206, {
            //             // 'Access-Control-Expose-Headers': ['Content-Encoding', 'Content-Type', 'Content-Range', 'Content-Length', 'Accept-Ranges'],                
            //             'Accept-Ranges': 'bytes',
            //             // 'Content-Length': chunksize,
            //             'Content-Length': article.img.inspect().chunkSize,
            //             'Content-Range': `bytes ${start}-${end}/${article.img.inspect().length}`,                
            //             // 'Content-Type': article.img.contentType  
            //             'Content-Encoding': 'gzip'
            //         });
            //         GridFS.createReadStream({
            //             _id: article.img._id,
            //             range: {
            //                 startPos: start,
            //                 endPos: end
            //             }
            //         // }).pipe(res);
            //         }).pipe(gzip()).pipe(res);
            //     } 
            //     else {
            //         res.writeHead(206, {
            //             'Accept-Ranges': 'bytes',
            //             'Content-Length': article.img.inspect().chunkSize,
            //             'Content-Range': 'bytes ' + 0 + '-' + 1 + '/' + article.img.inspect().length,
            //             'Content-Type': article.img.filename.replace('.', '/'),
            //             // 'Content-Encoding': 'gzip',
            //             'Access-Control-Expose-Headers': ['Content-Encoding', 'Content-Type', 'Content-Range', 'Content-Length', 'Accept-Ranges']
            //         });
            //         GridFS.createReadStream({
            //             _id: activity.content._id,
            //             range: {
            //                 startPos: start,
            //                 endPos: end
            //             }
            //         }).pipe(res);
            //     }
            // } catch (error) {
            //     console.log(error)
            // }
