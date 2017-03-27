var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* The user schema attribute / charcteristics / fields */
var VideoCategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true
    }
});
module.exports = mongoose.model('VideoCategory', VideoCategorySchema);