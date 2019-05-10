//require express
//express is a framework that makes node.js easier to work with
const express = require('express');
//convention is to store the framework in a variable called app
const app = express();
//bodyParser is middleware
//https://www.npmjs.com/package/body-parser
//The bodyParser object exposes various factories to create middlewares. 
//All middlewares will populate the req.body property with the parsed body 
//when the Content-Type request header matches the type option, 
//or an empty object ({}) if there was no body to parse, 
//the Content-Type was not matched, or an error occurred.
const bodyParser = require('body-parser');
//require cors
//Cross-Origin Resource Sharing (CORS) 
//is a mechanism that uses additional HTTP headers to tell a browser 
//to let a web application running at one origin (domain) 
//have permission to access selected resources from a server at a different origin.
const cors = require('cors');
//require my database files -- that allow node/express server to connect to mongodb 
//and access modeled data following the strict mongoose "blueprint"
require('./db/db');

//call the express method that makes bodyParser middleware ready to use -- parses data to json format only
app.use(bodyParser.json());

//set options for the cors method to a variable
const corsOptions = {
    origin: 'http://localhost:3000', // when you deploy your react app, this is where you put the address,
    credentials: true, // allowing cookies to be sent with requests from the client (session cookie),
    optionsSuccessStatus: 200 // some legacy browsers IE11 choke on a 204, and options requests
}

//use the cors method and pass the options variable
app.use(cors(corsOptions));

const campsiteController = require('./controllers/campsiteController')
app.use('/api/v1/campsites',campsiteController)


//call the express method that will "listen" to (or await requests from) the established environment (.env) or port 9000
//callback function console logs connection
app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
});
