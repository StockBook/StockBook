const VideoList = require('../../models/video-list');

module.exports.show = function (app) {
    return function (req, res, next) {
        VideoList.find({},
            function (err, data) {
                if (err) return next(err);
                res.json(data);
            }).limit(10);
    }
}

module.exports.add = function (app) {
    return function (req, res, next) {
        var videoList = new VideoList();
        var body = req.body;

        videoList.title = body.title;
        videoList.description = body.description;
        videoList.author = body.author;
        videoList.price = body.price;

        videoList.save(function (err, data) {
            if (err) return next(err);
            res.json({
                msg: '已儲存資料',
                data
            });
        })
    }
}

module.exports.showAll = function (app) {
    return function (req, res, next) {
        VideoList.find({}, function (err, data) {
            if (err) return next(err);
            res.json(data);
        });
    }
}