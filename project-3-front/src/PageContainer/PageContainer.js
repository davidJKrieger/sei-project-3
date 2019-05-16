import React, { Component } from 'react';

//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward
import {    TabContent, 
            TabPane, 
            Nav, 
            NavItem, 
            NavLink, 
            Row, 
            Col,
        } from 'reactstrap';


import Header from './Header/Header'



import classnames from 'classnames';
import ListItem from './ListComponent/Modal/ListItem'
import EditForm from './EditComponent/EditForm'
import MapContainer from './MapContainer/MapContainer';
import MyMapComponent from './MapContainer/MyMapComponent';
import NotesItem from './NotesComponent/NotesItem'
import AddModalComponent from './AddComponent/ModalContainer/AddModalComponent'
import ListModalComponent from './ListComponent/Modal/ListModalComponent'


class PageContainer extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: '1',
            campsites: [],
            campsiteToEdit: {
                id: null,
                name: '',
                notes: '',
                lat: 0,
                lng: 0,
            },
            selectedCampsite: {
                id: null,
                name: '',
                notes: '',
                lat: 0,
                lng:0,
            },

        };
    }
    //when the page loads, get all the campsites from the db
    componentDidMount() {
       this.getCampsites()
    }
    //perform yet to be written function on selected campsite 
    //it should set the edit form state to selected campsite 
    //and or highlight it on index list
    highlightListItem = () => {
        //when a user clicks on a marker, the selectdCampsite state should become the clicked id
      console.log("clicked")
    }
    //simple function that gets passed to forms to show data as it is entered
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }
    //query the express api 
    //return all sites
    //store as an array of objects in state
    //pass as props -- campsites

    deleteCampsite = async (id, e) => {
        console.log(id, ' this is id')
        e.preventDefault();
        try {
            const deleteCampsite = await fetch('http://localhost:9000/api/v1/campsites/' + id, {
                method: 'DELETE',
                credentials: 'include'
            });
            console.log('inside try')
            const deleteCampsiteJson = await deleteCampsite.json();
            this.setState({ campsites: this.state.campsites.filter((campsite, i) => campsite._id !== id) });

        } catch (err) {
            console.log(err, ' error')
        }
    }

    getCampsites = async () => {
        try {
            //make an api call to get all of the campsites
            const response = await fetch('http://localhost:9000/api/v1/campsites', {
            });
            console.log(response)
            //respond with error if call fails
            if (response.status !== 200) {
                // for http errors, Fetch doesn't reject the promise on 404 or 500
                throw Error(response.statusText);
            }
            //the response will comeback a regular json. it must be parsed into a js obj
            const responseParsed = await response.json();

            this.setState({
                status: 200,
                campsites: responseParsed.data
            });
            // remember that render is automatically called after setState
        } catch (err) {
            console.log(err);
        }
        console.log(this.state.campsites)
    }
  
    //CREATE / READ
    //pass this functon as props to add form
    //querries the database to post form data
    //sets parent state with bracket notation and spread opperator
    handleNewCampsite = async (data) => {
        try {
            const addedCampsite = await fetch('http://localhost:9000/api/v1/campsites', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const parsedResponse = await addedCampsite.json();
            console.log(parsedResponse)
            this.setState({ campsites: [...this.state.campsites, parsedResponse.data] })

        } catch (err) {
            console.log(err)
        }
        console.log(this.state.campsites)
    }
  
    //UPDATE
    //pass as props to edit form
    updateCampsite = async (data) => {
        try {
        const editResponse = await fetch('http://localhost:9000/api/v1/campsites/' + this.state.campsiteToEdit._id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }
        })

        const parsedResponse = await editResponse.json();
        const foundCampsite = this.state.campsites.map((campsite) => {
            if(campsite._id === this.state.campsiteToEdit._id) {
                campsite = parsedResponse.data;
            }
        return campsite
        })

        this.setState({
            campsiteToEdit: foundCampsite,
            });
        }catch(err) {
        console.log(err)
        }   
    }
    //DESTROY
    // ADD a delete button to listItems


    //set state to reflect clicked tab
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
   
    render() {

        return (
            <div>
                <Header />
<MapContainer
highlightListItem = {this.highlightListItem} 
selectedCampsite = { this.state.selectedCampsite }
campsites = { this.state.campsites }
/>
          
         
                        <Row>
                            <Col sm="6">
        <AddModalComponent
            campsite = { this.state.campsites }
            handleNewCampsite = { this.handleNewCampsite }
        />
            
                            </Col>
                            <Col sm="6">
                                <h4>List campsites here</h4>
        <ListModalComponent
            campsites = { this.state.campsites } 
            deleteCampsite = {this.deleteCampsite}
        />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
        <EditForm 
            campsite = { this.state.campsiteToEdit }
            handleChange = { this.handleChange }
            updateCampsite = { this.updateCampsite }
        />
                            </Col>
                            <Col sm="6">
                                <h4>Campsite Notes</h4>
        <NotesItem
        campsiteToEdit = {this.state.campsiteToEdit}
        />
                            </Col>
                        </Row>
            </div>
        );
    }
}

export default PageContainer