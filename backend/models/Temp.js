const mongoose = require('mongoose'); //
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let tempSchema = new Schema({
    Temperature: { type: String, required:true },
    Humidité: { type: String, required:true },
    Date: { type: Date, required:true },
    Heure: { type: String, required:true },
    
}, {timestamps: true},
{
    collection: 'climat'
})



module.exports = mongoose.model('climat', tempSchema)
