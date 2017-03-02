module.exports = function (app) {
    return function (req, res, next) {
        res.json({msg:'text message,it work'})
    }
}