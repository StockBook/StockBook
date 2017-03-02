var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* The user schema attribute / charcteristics / fields */
var symbolSchema = new Schema({
    symbol: String,
    name: String,
    companyClass: String
});
module.exports = mongoose.model('symbolSchema', symbolSchema);
