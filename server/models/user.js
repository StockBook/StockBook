var mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  crypto = require('crypto');
var Schema = mongoose.Schema;


/* The user schema attribute / charcteristics / fields */
var userSchema = new Schema({

  email: { type: String, unique: true, lowercase: true },
  password: String,

  profile: {
    name: { type: String, default: '' },
    picture: { type: String, default: '' }
  },

  address: String,
  history: [{
    date: Date,
    paid: { type: Number, default: 0 },
    // item: { type: Schema.Types.ObjectId, ref: ''}
  }]
});

//before input to DataBase, Encrypt.
userSchema.pre('save', function (next) {

  var user = this;

  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      user.password = hash;
      next();
    });
  });

});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}
userSchema.methods.gravatar = function (size) {
  if (!this.size) size = 200;
  if (!this.email) return 'https://gravatar.com/avatar/?s' + size + '&d=retro';
  var md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
}

module.exports = mongoose.model('User', userSchema);