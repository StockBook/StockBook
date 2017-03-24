var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* The user schema attribute / charcteristics / fields */
var videoListSchema = new Schema({
    title: String,
    description: String,
    author: String,
    price: String,
});
module.exports = mongoose.model('videoListSchema', videoListSchema);
