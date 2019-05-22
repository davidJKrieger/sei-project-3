import React, { Component } from 'react';

import {    TabContent, 
            TabPane, 
            Nav, 
            NavItem, 
            NavLink, 
            Row, 
            Col,
        } from 'reactstrap';

import Header from './Header/Header'
import GeoMap from './MapContainer/GeoMap';
import classnames from 'classnames';
import ListItem from './ListComponent/ListItem'
import AddForm from './AddComponent/AddForm'
import EditForm from './EditComponent/EditForm'

class PageContainer extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: '1',
            campsites: [],
            id: null,
            name: '',
            lat: 0,
            lng: 0,
            notes: '',
            selectedCampsiteId: null,
            selectedCampsite: {
                id: null,
                name: '',
                lat: 0,
                lng: 0,
                notes:''
            }

        };
    }
    componentDidMount() {
        this.getCampsites()
    }
    selectCampsite = (id, e) => {
        //bindind arguments come before the event object (e), when called with bind
        const foundCampsite= this.state.campsites.find((campsite) => campsite._id == id)
        console.log(foundCampsite, '<--selected before setsate')
        this.setState({
            selectedCampsiteId: id,
            selectedCampsite: {
                name: foundCampsite.name,
                lat: foundCampsite.lat,
                lng: foundCampsite.lng,
                notes: foundCampsite.notes,
            }
        });
        this.toggle('2')
    }
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
            this.setState({ 
                campsites: [...this.state.campsites, parsedResponse.data],
                selectedCampsite: parsedResponse.data
            })
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
                    campsites: responseParsed.data,
                });
            console.log(responseParsed.data)
            }
        } catch (err) {
            console.log(err);
        }
    } 
    handleFormChange = (e) => {
        this.setState({
            selectedCampsite: {
                ...this.state.selectedCampsite,
                [e.target.name]: e.target.value
            }
        })
    }
    updateCampsite = async (campsite, e) => {
        e.preventDefault();
        try {
            const editResponse = await fetch('http://localhost:9000/api/v1/campsites/' + this.state.selectedCampsiteId, {
                method: 'PUT',
                body: JSON.stringify(campsite),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const parsedResponse = await editResponse.json();
            const editedCampsiteArray = this.state.campsites.map((campsite) => {
                if (campsite._id === this.state.selectedCampsiteId) {
                    campsite.name = parsedResponse.data.name;
                    campsite.lat = parsedResponse.data.lat;
                    campsite.lng = parsedResponse.data.lng;
                    campsite.notes = parsedResponse.data.notes;
                }
                return campsite
            });
            this.setState({
                campsites: editedCampsiteArray,
            });
            this.toggle('1')
        } catch (err) {
            console.log(err);
        }
    }
    deleteCampsite = async (id, e) => {
        e.preventDefault();
        try {
            const deleteCampsite = await fetch('http://localhost:9000/api/v1/campsites/' + id, {
                method: 'DELETE',
                credentials: 'include'
            });
            console.log('inside try')
            const deleteCampsiteJson = await deleteCampsite.json();
            this.setState({ 
                campsites: this.state.campsites.filter((campsite, i) => campsite._id !== id)
            });

        } catch (err) {
            console.log(err, ' error')
        }
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,

            });
        }
    }
    render() {
        return (
            <div>
                <Header />
                <GeoMap
                    selectedCampsite = { this.state.selectedCampsite }
                    campsites = { this.state.campsites }
                />
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            My Dispersed Campsites
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
                                <h2>List of Campsites</h2>
                                <ListItem 
                                    activeTab = {this.state.activeTab}
                                    toggleTwo = {this.toggleTwo}
                                    selectCampsite = {this.selectCampsite}
                                    campsites = { this.state.campsites } 
                                    deleteCampsite={this.deleteCampsite} 
                                />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                            <EditForm 
                                campsite = { this.state.selectedCampsite }
                                handleChange = { this.handleChange }
                                updateCampsite = { this.updateCampsite }
                                handleFormChange ={ this.handleFormChange }
                                selectCampsiteId = {this.state.selectedCampsiteId}
                            />
                            </Col>
                            <Col sm="6">
                                <h4>{this.state.selectedCampsite.name}</h4>
                                <p> {this.state.selectedCampsite.notes}</p>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default PageContainer