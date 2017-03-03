const Router = require('express').Router();
const home = require('./home');
const signup = require('../controllers/member/signup');
const login = require('../controllers/member/login');
const passport = require('passport');
const local = require('../config/passport/local');



Router.post('/signup', signup());
Router.post('/',passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/',
    failureFlash: true
}));

Router.use(home);



module.exports = Router;