const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/* The user schema attribute / charcteristics / fields */
const BlogSchema = new Schema({
    title: { type: String, default: '' },
    content: String,
    authpr: { type: String, default: '' },
    created: Date,
});
module.exports = mongoose.model('BlogSchema', BlogSchema);
