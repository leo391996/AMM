const mongoose = require('mongoose');

const spec = mongoose.Schema({
    BrandName: { type: String, required: true },
    Model: { type: String,  required: true },
    PurchasecostUSD: { type: String,  required: true },
    SerialNumber: { type: String,  required: true },
    YearofManufactured: { type: String,  required: true },
    LifeTime: { type: String,  required: true },
    TotalAvailableTime: { type: String,  required: true },
    Expectedutilization: { type: String,  required: true },
    Idealrunrate:{ type: String,  required: true },
    TotalHoursworked:{ type: String,  required: true },
    MaintenanceFrequency:{ type: String,  required: true },
    image: { type: Buffer, required: true },
});

module.exports = mongoose.model('spec',spec);

