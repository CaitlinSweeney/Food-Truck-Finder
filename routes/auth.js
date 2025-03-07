var User = require('../models/user'),
    bcrypt = require('bcryptjs'),
    errors = {
        general: {
            status: 500,
            message: 'Backend Error'
        },
        login: {
            status: 403,
            message: 'Invalid username or password.'
        }
    };

module.exports = {
    render: (req, res) => { // render the login page
        res.render('auth.html');
    },
    logout: (req, res) => {
        req.session.user = null;
        res.redirect('/login');
    },
    login: (req, res) => { // form post submission
      console.log(req.body)
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if( err ) {
                console.error('MongoDB error:'.red, err);
                res.status(500).json(errors.general);
            }
            if( !user ) {
                // forbidden
                console.warn('No user found!'.yellow);
                res.status(403).json(errors.login);
            } else {
                console.info('auth.login.user', user);

                // at this point, user.password is hashed!
                bcrypt.compare(req.body.password, user.password, (bcryptErr, matched) => {
                    // matched will be === true || false
                    if( bcryptErr ) {
                        console.error('MongoDB error:'.red, err);
                        res.status(500).json(errors.general);
                    } else if ( !matched ) {
                        // forbidden, bad password
                        console.warn('Password did not match!'.yellow);
                        res.status(403).json(errors.login);
                    } else {
                        req.session.user = { id: user._id, truckName: user.truckName, fullName: user.fullName, phone: user.phone, email: user.email, types: user.types };
                        delete user.password; // just for securty, delete the password before sending it to the front-end;
                        User.update({_id:user._id}, {$set: {loggedIn: true}}, (err, res) =>{
                          if(err){
                            console.log("at loggedIn", err)
                          }else{
                            console.log('loggedIn success')
                          }
                        }
                      );
                        res.json(user);
                    }
                });
            }
        });
    },
    register: (req, res) => {
        console.log('Register payload:'.cyan, req.body);

        var newUser = new User(req.body);

        newUser.save((err, user) => {
            if( err ) {
                console.log('#ERROR#'.red, 'Could not save new user :(', err);
                res.status(500).send(errors.general);
            } else {
                console.log('New user created in MongoDB:', user);
                req.session.user = { id: user._id, truckName: user.truckName, fullName: user.fullName, phone: user.phone, email: user.email, types: user.types };
                User.update({_id:user._id}, {$set: {loggedIn: true}}, (err, res) =>{
                  if(err){
                    console.log("register loggedIn", err)
                  }else{
                    console.log('register loggedIn, success')
                  }
                }
              );
                res.send(user);
            }
        });
    },
    // Auth middleware functions, grouped
    middlewares: {
        session: (req, res, next) => {
            if( req.session.user ) {
                console.info('User is logged in, proceeding to dashboard...'.green);
                next();
            } else {
                console.warn('User is not logged in!'.yellow)
                res.redirect('/login');
            }
        }
    }
}
