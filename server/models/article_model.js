const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    subtitle: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pilar: {
        type: String
    },
    img: {
        type: Schema.Types.ObjectId,
        ref: 'pictures'
    }
});

const autoPopulateImg = function(next) {
        this.populate('img');
        next();
    };
    
    ArticleSchema.
        pre('findOne', autoPopulateImg).pre('find', autoPopulateImg);
    

const Article = mongoose.model('articles', ArticleSchema);
module.exports = Article;