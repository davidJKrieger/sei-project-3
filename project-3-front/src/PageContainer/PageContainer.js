import React, {Component} from 'react'

//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward

import TabsContainer from './TabsContainer/TabsContainer'
import Header from './Header/Header'
import MapContainer from './MapContainer/MyMapComponent'

//PageContainer is the parent element for 
//header, mapcontainer, tabs

class PageContainer extends Component {

    constructor(props) {
        super(props);
//set initial state 

        this.state = {
            //campsites is an empty array that will be filled with campsite objects from express api call
            activeTab: '1',
            //activeTab is required for react strap tabs to work properly
            campsites: [],
            //campsitesToEdit is a temp object that holds the result of edit form value
            campsiteToEdit: {        
                id: null,
                campsite: '',
                lat: 0,
                lng: 0,
            },
        };
    }
    //a lifecycle function that gets called as soon as the page loads (or component mounts)
    componentDidMount() {
        this.getCampsites()
    }
    //this is a function that will be passed as props to the forms
    handleChange = (e) => {
        //set state to add a key name for the name="" attribute in a form. value is set equal to the value attribute of the form
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    addCampsite = async (e) => {
        e.preventDefault();

        try {
            //store the async post request api call in an object variable that contains a key for the method, body, headers
            const addedCampsite = await fetch('http://localhost:9000/api/v1/campsites', {
                method: 'POST',
                //remember to parse the body which will be a js obj into a simple json ready string
                body: JSON.stringify(addedCampsite),
                //headers should be included on any api call. for this call I am designating the media as json
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status !== 200) {
                // for http errors, Fetch doesn't reject the promise on 404 or 500
                throw Error(response.statusText);
            }
            //The json() method of the Body mixin takes a Response stream and reads it to completion. 
            //It returns a promise that resolves with the result of parsing the body text as JSON.
            const parsedResponse = await addedCampsite.json();
            console.log(parsedResponse)
            //pass an updated object using a spread operator to grab the rest of the sites. add parsedresponse value
            this.setState({ campsites: [...this.state.campsites, parsedResponse.data] })

        } catch (err) {
            console.log(err)
        }
    }
    getCampsites = async () => {

        try {
            //make an api call to get all of the campsites
            const response = await fetch('http://localhost:9000/api/v1/campsites', {

            });
            //respond with error if call fails
            if (response.status !== 200) {
                // for http errors, Fetch doesn't reject the promise on 404 or 500
                throw Error(response.statusText);
            }
            //the response will comeback a regular json. it must be parsed into a js obj
            const responseParsed = await response.json();
        
            this.setState({
                //set the value of the state campsite key as parsedresponse.data
                //dont forget .data -- this is what the object comming back looks like:
                //          //res.json({
                            //status: 200,
                            //data: campsite
                            //});
                campsites: responseParsed.data
            });
            // remember that render is automatically called after setState
        } catch (err) {
            console.log(err);
        }
    }
    updateCampsite = async (e) => {
        e.preventDefault();

        try {
            //for the edit api call I need to add a unique id to let the server know what data to return
            //id is being stored as a value on the campsiteToEdit key in state based on the edit form information
            const editResponse = await fetch('http://localhost:9000/api/v1/campsites/' + this.state.campsiteToEdit.id, {
                //request object is similar to POST request. Use PUT - no need for override since react now controls the state of the form
                method: 'PUT',
                //campsiteToEdit is a key/value created by the edit form. 
                body: JSON.stringify(this.state.campsiteToEdit),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            //parse string into object
            const parsedResponse = await editResponse.json();
            //use map method to check each campsite
            const editedCampsites = this.state.campsite.map((campsite) => {
                if (campsite.id === this.state.campsiteToEdit.id) {
                    campsite = parsedResponse.data;
                }
                return campsite
            })

            this.setState({
                campsites: editedCampsites,
            });
        } catch (err) {
            console.log(err)
        }
    }
    render(){


        return(
            <div>
            <MapContainer />
            <Header />

            <TabsContainer />
            </div>

        )



    }




}

export default PageContainer

