const passport = require('passport'),
    util = require('util'),
    GoogleStrategy = require('passport-google').Strategy;


passport.serializeUser(function (err, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

