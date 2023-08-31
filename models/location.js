const mongoose = require('mongoose');

const location = mongoose.Schema({
    Latitude: { type: String, required: true },
    Longitude: { type: String,  required: true },

});

module.exports = mongoose.model('location',location);
