require('colors');

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    // Routes = require('./routes'),
    path = require('path'),
    port = process.env.PORT || 1300,
    app = express();

app.use(express.static(path.join(__dirname,'public')));

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));
