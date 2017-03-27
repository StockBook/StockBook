var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var date = new Date();


/* The user schema attribute / charcteristics / fields */
var emailSchema = new Schema({
    email: String,
    create: date,
    
});
module.exports = mongoose.model('email', emailSchema);