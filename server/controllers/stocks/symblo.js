const request = require('request');

module.exports = function(params){
    return function (req, res, next) {
        request({
            url:'http://',
            method:"GET"
        },function(){})
    }
}

