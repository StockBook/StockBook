const User = require('../../models/user');
module.exports.index = function (app) {
    return function (req, res, next) {
        if (!req.user) {
            res.json({ msg: '請先登入' });
        } else {
            User.findOne({ _id: req.user._id }, function (err, user) {
                if (err) return next(err);
                res.json(user);
            })
        }

    }
}

module.exports.update = function (app) {
    return function (req, res, next) {
        //TODO://利用遍歷來修改資料。
        User.findOne({ _id: req.user._id }, function (err, user) {
            if (err) return next(err);
            if (req.body.name) user.profile.name = req.body.name;
            if (req.body.address) user.profile.address = req.body.address;
            user.save(function (err) {
                if (err) return next(err);
                res.json({ msg: '修改資料成功' });
            });
        });

    }
}
