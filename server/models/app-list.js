var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* The user schema attribute / charcteristics / fields */
var AppListSchema = new Schema({
    name: { type: String, unique: true },
    description: String,
    created: Date
});
module.exports = mongoose.model('appListSchema', AppListSchema);