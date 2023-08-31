const mongoose = require('mongoose');

const metering = mongoose.Schema({
    metering: { type: String, required: true },

});

module.exports = mongoose.model('metering',metering);
