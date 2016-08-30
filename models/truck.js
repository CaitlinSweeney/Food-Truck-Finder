var mongoose = require('mongoose'),

    TruckSchema = new mongoose.Schema({
        name:  String,
        description : String,
        types : Object,
        location : Array,
        phone : String,
        hours : String,
        website : String,
        image : String,
    });
module.exports = mongoose.model('Truck', truckSchema);
