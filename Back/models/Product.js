const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    target: {
        type: String,
        required: true
    },
    bounty: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    urlLink: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }

});


module.exports = mongoose.model('Contract', ProductSchema);