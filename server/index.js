const
    express = require('express'),
    app = express(),
    routes = require('./routes'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const secret = require('./config/secret'),
    db = mongoose.connect(secret.db,function(err){
        if(err) console.log(err);
        console.log('Successful');
    });





app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(routes);


app.listen(3000);

