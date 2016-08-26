// Trucks contoller to export to database

var User = require('../models/user');

module.exports = {
  get : (req, res) => {
    // READ
    console.log("getting user")
    // User.query(req.query),
    User.findOne({
      _id: req.session.user._id
    }, (err, user) => {
        if(err){
          console.log(err);
          res.status(500).send({ message: 'Something is not right :('});
        } else {
          res.json(user);
        }
        console.log("got user")
    });
  },
  getAll: (req, res) => {
    User.find({}, (err, users) => {
        if(err){
          console.log(err);
          res.status(500).send({ message: 'Something is not right :('});
        } else {
          res.json(users);
        }
        console.log("got all da users")
    })
  },
  upsert : (req, res) => {
    // CREATE / UPDATE
    console.log("req.session.user", req.session.user)
    for (var newProp in req.body){
      req.session.user[newProp]= req.body[newProp];
    }
    console.log("req.session.user", req.session.user)
    User.findOneAndUpdate({_id : req.session.user._id},
      req.session.user,
      {new : true},
      function(err, user){
        console.log("req.body", req.body)
        req.session.user = user
        res.send(req.session.user)
      })
    // User.findOneAndRemove({_id : req.session.user._id},
    //   req.session.user,
    //   {new : false},
    //     function(err, user){
    //       console.log("req.body", req.body)
    //       req.session.user = user
    //       res.send(req.session.user)
    //     })
    }
  }
  // remove : (req, res) => {
  //   // DELETE
  // }
