const Router = require('express').Router();
const home = require('./home');
const blog = require('./blog');
// const news = require('./news');
const videos = require('./videos');
const categories = require('./videos/categories');
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
Router.use(blog);
// Router.use(news);
Router.use(videos);
Router.use(categories);


module.exports = Router;