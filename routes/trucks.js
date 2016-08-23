// Trucks contoller to export to database

var User = require('../models/user');

module.exports = {
  get : (req, res) => {
    // READ
    console.log()
  },
  upsert : (req, res) =>{
    // CREATE / UPDATE
    console.log(req.session.user)
    for (var newProp in req.body){
      req.session.user[newProp]= req.body[newProp];
    }
    User.findOneAndUpdate({_id : req.session.user._id},
      req.body,
      {new : true},
      function(err, user){
        req.session.user = user
        res.send(req.session.user)
      })
    }
  }
  // remove : (req, res) => {
  //   // DELETE
  // }
// }
