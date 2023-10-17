const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }

});


module.exports = mongoose.model('User', UserSchema);