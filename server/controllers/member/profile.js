const User = require('../../models/user');
module.exports.index = function () {
    return function (req, res, next) {
        if (!req.user) {
            res.json({ msg: '請先登入' });
        } else {
            User.findOne({ _id: req.user._id}, function (err, user) {
                if (err) return next(err);
                res.json(user);
            })
        }

    }
}

module.exports.edit = function () {
    return function (req, res, next) {
        User.findOne(){
            
        }
    }
}