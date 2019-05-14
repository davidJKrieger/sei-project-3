import React from 'react';

//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward
import {    TabContent, 
            TabPane, 
            Nav, 
            NavItem, 
            NavLink, 
            Card, 
            Button, 
            CardTitle, 
            CardText, 
            Row, 
            Col,
            Form, 
            FormGroup, 
            Label, 
            Input, 
            FormText  
        } from 'reactstrap';

import classnames from 'classnames';
import ListItem from './ListComponent/ListItem'
import AddForm from './AddComponent/AddForm'
import EditForm from './EditComponent/EditForm'

class TabsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
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

        };
    }
    componentDidMount() {
       this.getCampsites()
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
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

    handleSubmit = (e) => {
        e.preventdefault()
        this.handleNewCampsite();
    }

    handleNewCampsite = async (e) => {
        e.preventDefault();

        try {
            const addedCampsite = await fetch('http://localhost:9000/api/v1/campsites', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(addedCampsite),
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
    }

    getCampsites = async () => {
        try {
            const response = await fetch('http://localhost:9000/api/v1/campsites', {
                credentials: 'include'
            });
            console.log(response)
            if (response.status !== 200) {
                // for http errors, Fetch doesn't reject the promise on 404 or 500
                throw Error(response.statusText);
            }

            const responseParsed = await response.json();
            // after setState render is automatically called
            if(response != null) {
                this.setState({
                    campsites: responseParsed.data
                });
            console.log(responseParsed.data)
            }
        } catch (err) {
            console.log(err);
        }
    } 
    updateCampsite = async (e) => {
        e.preventDefault();
        
        try {
        const editResponse = await fetch('http://localhost:9000/api/v1/campsites/' + this.state.campsiteToEdit._id, {
            method: 'PUT',
            body: JSON.stringify(this.state.campsiteToEdit),
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
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            My Campsites
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Selected Campsite
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={ this.state.activeTab }>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="6">
        <AddForm 
            campsite = { this.state.campsites }
            handleNewCampsite = { this.handleNewCampsite }
        />
            
                            </Col>
                            <Col sm="6">
                                <h4>List campsites here</h4>
        <ListItem campsites = { this.state.campsites } />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
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
                                <p> ornare, etiamdunt malesuada sodales lacus velit.</p>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default TabsContainer