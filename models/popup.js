const mongoose = require('mongoose');

const workorderschema = mongoose.Schema({
    workordername: { type: String, required: [true, 'Name should be mandatory'] },
    workordercode: { type: String,  required: true },
    description:{ type: String,  required: true },
    noassetavailable: { type: String,  required: true },
    priority: { type: String,  required: true },
    plannedstartdate:{ type: String,  required: true},
    targetdate: { type: String,  required: true },
    workordertype:{ type: String,  required: true},
    nochecklisttemplateavailable:{ type: String,  required: true},
    chooseengineer: { type: String,  required: true},
    estimatedworkhourse:{ type: String,  required: true},
});

module.exports = mongoose.model('workorder',workorderschema);
