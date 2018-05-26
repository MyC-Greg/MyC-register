const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BioSchema = new Schema({
    names:{
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
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

BioSchema.
    pre('findOne', autoPopulateImg).pre('find', autoPopulateImg);



const Bio = mongoose.model('bio', BioSchema);

module.exports = Bio;