const Blog = require('../../models/blog');
const User = require('../../models/user');

module.exports.index = function (app) {
    return function (req, res, next) {
        var blogUser;
        var blogList;
        User.findOne({ siteName: req.params.siteName }, function (err, user) {
            if (err) return next(err);
            blogUser = user;
        })
        Blog.find({ author: req.params.siteName }, function (err, blog) {
            if (err) return next(err);
            blogList = blog;
        })

        if (typeof blogUser === 'object') {
            blogUser.blog = blogList;
            res.json(blogUser);
        } else {
            res.json({ msg: '查無此人' });
            
        }
    }
}

module.exports.update = function () {
    const blog = new Blog();
}

module.exports.delete = function () {
    const blog = new Blog();
}

module.exports.add = function () {
    const blog = new Blog();
}