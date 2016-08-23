var Auth = require('./auth')
var Trucks = require('./trucks')

module.exports = (app) => {
    app.get('/', (req,res) => {
        // res.redirect('/login')
        res.render('index.html')
    });

    app.get('/login', Auth.render)  // login page
    app.get('/logout', Auth.logout) // logout route + redirect

    app.post('/login', Auth.login);         // login form submission
    app.post('/register', Auth.register)    // register form submission

    app.all('/dashboard', Auth.middlewares.session);
    app.get('/dashboard', (req, res) => {
      console.log(req.session);
        res.render('dashboard.html', req.session);
    })

    // User Information Routes
    app.get('/trucks/', Trucks.get); // find one user
    app.get('/trucks/:id', Trucks.get); // find one user
    app.post('/trucks', Trucks.upsert); // Update
    app.post('/trucks:id', Trucks.upsert); // Update
}
