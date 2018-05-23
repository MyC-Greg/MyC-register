const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    interest: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;