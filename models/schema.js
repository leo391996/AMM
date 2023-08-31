const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: { type: String, unique: true, required: [true, 'Name should be mandatory'] },
    email: { type: String, unique: true, required: [true, 'email should be mandatory'] },
    Password: { type: String,unique: false,  required: [true, 'password not matching'] },
});


module.exports = mongoose.model('employes',employeeSchema);



