var mongoose = require('mongoose');

var truckSchema = mongoose.Schema ({
    name : {type : String},
    truck name : {type : String},
    description : {type : String},
    type : {type : Array, default : []},
    location :  {type : Array, default : []},
    number : {type : String},
    hours : {type : String},
    website : {type : String},
    image : {type : String}
  });

  // export the truck model

  model.exports = mongoose.model('truck', truckSchema, 'trucks');
