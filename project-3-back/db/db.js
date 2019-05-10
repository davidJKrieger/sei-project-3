//require Mongoose
//Mongoose is an Object Data Modeling(ODM) library for MongoDB and Node.js.
//It manages relationships between data, provides schema validation, 
//and is used to translate between objects in code and the representation of those objects in MongoDB.
const mongoose = require('mongoose')
//https://mongoosejs.com/docs/connections.html
// mongoose lets you connect to a mongodb with the mongoose.connect() method
//it takes in an address for your db and a callback function
mongoose.connect('mongodb://localhost/campsites',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

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
