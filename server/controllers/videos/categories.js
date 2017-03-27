const Category = require('../../models/video-category');

module.exports.index = function (app) {
    return function (req, res, next) {
        Category.find({}, function (err, data) {
            if (err) return next(err);
            res.json(data);
        });
    }
}
module.exports.add = function (app) {
    return function (req, res, next) {
        var cate = new Category();
        cate.name = req.body.name;
        cate.save(function (err, data) {
            if (err) return next(err);
            res.json({
                msg: '新增分類成功'
            })
        });
    }
}
