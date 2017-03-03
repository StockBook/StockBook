const
    express = require('express'),
    app = express(),
    routes = require('./routes'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    MongoStore = require('connect-mongo/es5')(session),
    secret = require('./config/secret'),
    logger = require('morgan'),
    flash = require('express-flash');

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secret.key,
    store: new MongoStore({ url: secret.db, autoReconnect: true })
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});

db = mongoose.connect(secret.db, function (err) {
    if (err) console.log(err);
    console.log('Successful');
});




app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(routes);


app.listen(3000);
