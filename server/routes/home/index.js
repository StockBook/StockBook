const home = require('express').Router();
const message = require('../../controllers/message');
const profileController = require('../../controllers/member/profile');

home.get('/home', function (req, res, next) {
    res.json({ msg: 'home here' });
});

home.get('/home/profile', profileController.index());


module.exports = home;