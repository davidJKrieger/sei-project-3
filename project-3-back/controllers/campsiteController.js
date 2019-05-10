//bring in express
const express = require('express');
//store the router function
const router = express.Router();
//require the model
const Camp = require('../models/Campsites')

//## REMEMBER
// With multiple callback functions, it is important to provide next as an argument to the callback function
// and then call next() within the body of the function to hand off control to the next callback.

//?? QUESTION
// How does the relationship between controller and server work?
// router is the variable that holds the router method of express. 
// It allows me to store the route functions and endpoints in a seperate file 
// the file is exported to the server and used with app.use

///////////////////
// Restful Routes//
///////////////////

// ** EXPLAINER
// REST(i.e.Representation State Transfer) 
// is an architectural style for defining our routes.
// It is a way of mapping HTTP routes and the CRUD functionalities.
// When building APIs, we want to provide the four basic types of functionality.
// There must be a way to Create, Read, Update, and Delete resources.
// In a REST environment, CRUD often corresponds to the HTTP methods
// POST, GET, PUT, and DELETE, respectively.

//RESTFUL #1
//Index route
//test on postman  --  http://localhost:9000/api/v1/campsites

router.get('/', async (req , res) => {
    try {
        //
        console.log(req.body + "req.body")
        //const campsites = await Camp.find();
        res.json({
            status:200,
           // data: campsites
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    }
})

//RESTFUL #2
//Post route
//test on postman  --  http://localhost:9000/api/v1/campsites

router.post('/', async (req, res) => {

    try {
        console.log(req.body, ' this is req.body');
        const newCampsite = await Camp.create(req.body);
        console.log('response happening?')
        res.json({
            status: 200,
            data: newCampsite
        });

    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

//show route

//edit route

//update route

//destroy route



//send the router out so it can be imported in the server
module.exports = router;