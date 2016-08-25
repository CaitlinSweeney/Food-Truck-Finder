// Trucks contoller to export to database

var User = require('../models/user');

module.exports = {
  get : (req, res) => {
    // READ
    console.log("getting user")
    // User.query(req.query),
    User.find({loggedIn: true},
      function(err, user){
        if(err){
          console.log(err);
        }else{
          res.json(user)
        }
        console.log("got user")
    });
  },
  upsert : (req, res) => {
    // CREATE / UPDATE
    // console.log("req.session.user", req.session.user)
    for (var newProp in req.body){
      req.session.user[newProp]= req.body[newProp];
    }
    // console.log("req.session.user", req.session.user)
    User.findOneAndUpdate({_id : req.session.user._id},
      req.session.user,
      {new : true},
      function(err, user){
        // console.log("req.body", req.body)
        req.session.user = user
        res.send(req.session.user)
      })
    }
  }
  // remove : (req, res) => {
  //   // DELETE
  // }
