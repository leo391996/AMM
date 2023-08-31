const mongoose = require('mongoose');

const preventivemaintenance = mongoose.Schema({
    Assets: { type: String, required: [true, 'Asset should be mandatory'] },
    WorkorderName: { type: String,  required: true },
    EnterWorkorderDescription:{ type: String,  required: true },
    ChoosePriority: { type: String,  required: true },
    AssignedTo: { type: String,  required: true },
    StartDate:{ type: String,  required: true},
    EndDate: { type: String,  required: true },
    Yearly:{ type: String,  required: true},
    Every:{ type: String,  required: true },
    NoChecklistAvailable: { type: String,  required: true},

});

module.exports = mongoose.model('preventivemaintenance',preventivemaintenance);
