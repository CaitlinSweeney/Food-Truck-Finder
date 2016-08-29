var mongoose = require('mongoose'),

    TruckSchema = new mongoose.Schema({
        truckName:  String,
        email: String,
        description : String,
        types : Object,
        location : Array,
        phone : String,
        hours : String,
        website : String,
        image : String,
        created: {
            type: Number,
            default: () => Date.now()
        }
    });
module.exports = mongoose.model('Truck', truckSchema);
