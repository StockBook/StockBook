const request = require('request');
const parser = require('xml2json');


module.exports = function () {
    return function (req, res, next) {
        request('https://news.google.com/news?q=apple&output=rss', function (err, content) {
            if(err) return next(err);
            var json = parser.toJson(content.body);
            res.json(json);
        });
    }
}