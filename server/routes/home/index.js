const home = require('express').Router();
const message = require('../../controllers/message');

home.get('/home',function(req,res,next){
    res.json({msg:'home here'});
});

home.get('/home/weigo',message(home));

module.exports = home;