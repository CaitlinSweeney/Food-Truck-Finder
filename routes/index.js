var Auth = require('./auth')
var Users = require('./users')

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
    app.get('/users/', Users.get); // find one user
    app.get('/users/:id', Users.get); // find one user
    app.post('/users', Users.upsert); // update
    app.post('/users:id', Users.upsert); // Update
}
