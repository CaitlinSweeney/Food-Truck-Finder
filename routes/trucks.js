// Trucks contoller to export to database

var User = require('../models/user');

module.exports = {
  get : (req, res) => {
    // READ
    truck.find({})
    .populate('')
    .exec(function(err, trucks){
      res.json(trucks);
    })
  }
  upsert : (req, res) =>{
    // CREATE / UPDATE
    if(req.params.id){
    }
    else{
      var newUser = new User(req.body);
      newUser.save(function(err, user){
        if(err){
          return res.json(err);
        }
        res.json(user);
      });
    }
  },
  remove : (req, res) => {
    // DELETE
  }
}
