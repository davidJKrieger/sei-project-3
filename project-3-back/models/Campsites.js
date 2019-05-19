//require mongoose in order to set the schema "blueprint" for the model
const mongoose = require('mongoose')
// instantiate a class using mongoose.Schema method -- S must be capitalized

const campsiteSchema = new mongoose.Schema({
    name: String,
    notes: String,
    lat: Number,
    lng: Number
})

//let the mongoose model be used by other files in the app
module.exports = mongoose.model('campsites', campsiteSchema)



