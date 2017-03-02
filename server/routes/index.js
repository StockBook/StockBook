const Router = require('express').Router();
const home = require('./home');
const signup = require('../controllers/member/signup');


Router.post('/signup', signup(Router));
Router.get('/',function(req,res,next){
    res.json('');
})

Router.use(home);



module.exports = Router;