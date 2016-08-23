// Trucks contoller to export to database

var User = require('../models/user');

module.exports = {
  get : (req, res) => {
    // READ
    truck.find({})
    // .populate('')
    // .exec(function(err, trucks){
    //   res.json(trucks);
    // })
  },
  upsert : (req, res) =>{
    // CREATE / UPDATE
    console.log(req.session.user)
    for (var newProp in req.body){
      req.session.user[newProp]= req.body(newProp);
    }
    User.findOneAndUpdate({_id : req.session.user._id},
      req.body,
      {new : true},
      function(err, user){
        req.session.user = user
        res.send(req.session.user)
      })


      //   newUser.save(function(err, user){
      //   if(err){
      //     return res.json(err);
      //   }
      //   res.json(user);
      // });
    }
  }
  // remove : (req, res) => {
  //   // DELETE
  // }
// }
