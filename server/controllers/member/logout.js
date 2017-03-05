module.exports = function (app) {
    return function (req, res, next) {
        req.logout();
    }
}