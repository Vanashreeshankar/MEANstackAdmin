const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
 
    name: {type:String},
    email: {type:String},
    role: {type:String}
});

module.exports = { Employee };