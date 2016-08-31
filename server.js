require('colors');

var express = require('express'),
    HTTPS = require('https'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes'),
    path = require('path'),
    ejs = require('ejs'),
    fs = require('fs'),
    sessions = require('client-sessions'),
    port = process.env.PORT || 1300,
    app = express();

app.use(logger('dev'));
app.use(sessions({
  cookieName: '_mean-auth', // front-end cookie name
  secret: 'T&U@K$', // the encryption password : keep this safe
  requestKey: 'session', // req.session,
  duration: 86400, // 60 * 60 * 24 (number of seconds in a day), tells the middleware when the cookie/session should expire,
  cookie: {
      ephemeral: false,   // when true, cookie expires when browser is closed
      httpOnly: true,     // when true, the cookie is not accesbile via front-end JavaScript
      secure: false       // when true, cookie will only be read when sent over HTTPS
    }
}));

app.use(express.static(path.join(__dirname,'public')));
app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.set('view engine','html'); // allows us to specify the default extension for the files in the views folder
app.engine('html', ejs.renderFile); // this is the function that binds to res.render

mongoose.connect('mongodb://localhost/Trucks', (mongooseErr) => {
    if( mongooseErr ) {
        console.error('#ERROR#'.red,'Could not initilize mongoose!', mongooseErr);
    } else {
        console.info('Mongoose initilized!'.green.bold);
    }
});


Routes(app);

app.listen(port, (error)=>{
    if(error) {
        console.error('The Trucks are not starting!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log("Our trucks are revin' to go!" .yellow, port);
    }
});
// app.use(function(err, req, res, next){
//   console.error(err.stack)
//   res.status(404).send({
//     status: 404,
//     message: 'Page Not Found!'
//   })
// });

if ( process.env.NODE_ENV !== "development" ){
   HTTPS.createServer({
      key:  fs.readFileSync('/etc/ssl/private/truckgrubhub.com.pem'),
      cert: fs.readFileSync('/etc/ssl/private/truckgrubhub.com.crt')
    }, app).listen( 443 );
}
