const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PictureSchema = new Schema({
    filename: {
        type: String, 
        required: true
    },
    contentType: {
        type: String
    }
},
    {
        collection: 'fs.files'
    }
);

const Picture = mongoose.model('pictures', PictureSchema);
 // faire un truc ou on peut lier a des activites existantes, ou a des activites specifiques.
module.exports = Picture;