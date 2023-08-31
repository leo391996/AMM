const mongoose = require('mongoose');

const mro = mongoose.Schema({
    NoAssetAvailable: { type: String, required: true },
    NoCustomerAvailable: { type: String,  required: true },
    MaintenanceType:{ type: String,  required: true },
    TargetDate: { type: String,  required: true },
    Description: { type: String,  required: true },

});

module.exports = mongoose.model('mro',mro);
