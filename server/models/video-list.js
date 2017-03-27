var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* The user schema attribute / charcteristics / fields */
var videoListSchema = new Schema({
    title: String,
    description: String,
    author: String,
    price: String,
    image: String,
    url: String,
    category:{type: Schema.Types.ObjectId, ref:'videoCategory'}
});
module.exports = mongoose.model('videoList', videoListSchema);
