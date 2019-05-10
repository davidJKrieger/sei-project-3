//require mongoose in order to set the schema "blueprint" for the model
const mongoose = require('mongoose')
// instantiate a class using mongoose.Schema method -- S must be capitalized

const campsiteSchema = new mongoose.Schema({
    location: String
    notes: String
    coordinates: {
        type: [Number],
        required: true}
})



//let the mongoose model be used by other files in the app
module.exports = mongoose.model('Campsite',campsiteSchema)