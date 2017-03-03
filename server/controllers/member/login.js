const local = require('../../config/passport/local');
const passport = require('passport');
module.exports = passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/',
    failureFlash: true
});