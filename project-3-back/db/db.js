
//require Mongoose
//Mongoose is an Object Data Modeling(ODM) library for MongoDB and Node.js.
//It manages relationships between data, provides schema validation, 
//and is used to translate between objects in code and the representation of those objects in MongoDB.
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/camp';

mongoose.connect( process.env.MONGODB_URI || connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//https://mongoosejs.com/docs/connections.html
// mongoose lets you connect to a mongodb with the mongoose.connect() method
//it takes in an address for your db and a callback function


//the next set of functions will consolelog the state of the db connection

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
    console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
    console.log('Mongoose is disconnected')
});

//Add some campsites to the DB
// Campsites.collection.insertMany(
    // [
    // {
    //     location: "The Caribou Townsite",
    //     notes: "five miles northwest of Nederland.",
    //     coordinates: {
    //         type: [39.9803027047, -105.57807475800],
    //         required: true,
    //     }
    // }]
//, (err, data) => {
//         console.log("added some campsites to the DB")
//         mongoose.connection.close();
// });