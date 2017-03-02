const User = require('../../models/user');

module.exports = function () {
    return function (req, res, next) {
        var user = new User();
        User.findOne({ email: req.body.email }, function (err, existingUser) {
            if (existingUser) {
                res.json({ msg: '該信箱有人使用' });
            } else {
                user.profile.name = req.body.name;
                user.email = req.body.email;
                user.password = req.body.password;
                user.profile.picture = user.gravatar();
                user.save(function(err, user){
                    console.log(user.email + ': 註冊成功');
                    if(err) return next(err);               
                });
                res.json({msg: user.email + '註冊成功'});
            }
        })

    }
}