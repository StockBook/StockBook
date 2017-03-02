module.exports = funciton(app, callback){
    return function (req, res, next) {
        callback()
    }
};