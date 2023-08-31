const mongoose = require('mongoose');

const asset = mongoose.Schema({
    AssetCode: { type: String, required: true },
    AssetName: { type: String,  required: true },
    Category:{ type: String,  required: true },
    NoPlantAvailable: { type: String,  required: true },
    PlannedProductionTime: { type: String,  required: true },
    // image: { type: String,  required: true },
    image: { type: Buffer, required: true },
});

module.exports = mongoose.model('asset',asset);