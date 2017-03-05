const home = require('express').Router();
const message = require('../../controllers/message');
const profile = require('../../controllers/member/profile');

home.get('/home', function (req, res, next) {
    res.json({ msg: 'home' });
});

home.get('/home/profile', profile.index());
home.post('/home/profile/edit',profile.update());


module.exports = home;