require('colors');

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    // Routes = require('./routes'),
    path = require('path'),
    ejs = require('ejs'),
    // sessions = require('client-session'),
    port = process.env.PORT || 1300,
    app = express();

app.use(express.static(path.join(__dirname,'public')));

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));

// Routes(app);

app.listen(port, (error)=>{
    if(error) {
        console.error('The Trucks are not starting!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log("Our trucks are revin' to go!" .yellow);
    }
});
