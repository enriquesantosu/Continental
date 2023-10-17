const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
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


module.exports = mongoose.model('Gun', ProductSchema);