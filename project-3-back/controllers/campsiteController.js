//bring in express
const express = require('express');
//store the router function
const router = express.Router();
//require the model
const Camp = require('../models/campsites')

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

//--LINK--RESTFUL ROUTES
//https://git.generalassemb.ly/WebDev-Connected-Classroom/intro_to_Rest/blob/master/README.md

//** EXPLAINER ** this app will not use all seven routes.  update and edit are combined. same for new and post

//--LINK--DB Query
//https://mongoosejs.com/docs/queries.html


//--LINK--EXPRESS BASIC ROUTING
//https://expressjs.com/en/starter/basic-routing.html

//READ MANY
//Index route
//test on postman  --  http://localhost:9000/api/v1/campsites

router.get('/', async (req , res) => {
    try {
        console.log(req.body)
        const campsites = await Camp.find({});
        res.json({
            status:200,
            data: campsites
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    }
})

//CREATE
//Post route
//test on postman  -- GET  http://localhost:9000/api/v1/campsites

router.post('/', async (req, res) => {

    try {
        //req.body is the parsed body of the form sent with the post request
        console.log(req.body, ' this is req.body');
        //store a database query in the variable newCampsite
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

//READ ONE
//show route

// ** EXPLAINER
//URL and Query Params
// -- LINK
//https://git.generalassemb.ly/WebDev-Connected-Classroom/url_and_query_params/blob/master/README.md

//## REMEMBER
//Make sure your routes are in the correct order
//anything after a colon is treated as a variable whose value is placed in that spot on the URL


//test on postman  -- GET http://localhost:9000/api/v1/campsites/5cd5a8b9d9ff02d0046fdcae
//1. Query the database -- use async/await here because I am awaiting response from DB
//2. Pass req.params._id -- make variable after req.params matches variable passed to URL 
//3. Store query result in variable
// res is a param of the callback in the express method
// .json() is a method that parses the response into json
// https://expressjs.com/en/api.html#express.json
//return the query variable as a value in the key value pair
//When you use JSON, you’re basically writing the object out as an associative array.
//Each entry is defined by a key-value pair: the keys define property and method names, 
//the values define either properties or functions
// respond with a status
// https://restfulapi.net/http-status-codes/

router.get('/:id', async (req, res) => {
    try{
        const showCampsite = await Camp.findById(req.params.id)
        res.json({
            status: 200,
            data: showCampsite
        })
        console.log('response happening?')
    }catch(err) {
        console.log(err);
        res.send(err);
    }
})

//UPDATE
router.put('/:id', async (req, res) => {

    try {
        const updatedCamp = await Camp.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            status: 200,
            data: updatedCamp
        });
    } catch (err) {
        res.send(err)
    }
});



//DESTROY
router.delete('/:id', async (req, res) => {
    try {
        const deletedCampsite = await Camp.findByIdAndRemove(req.params.id)
        res.json({
            status: 200,
            data: deletedCampsite
        })

    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


//send the router out so it can be imported in the server
module.exports = router;