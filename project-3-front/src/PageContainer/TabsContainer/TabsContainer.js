import React from 'react';

//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ListItem from './ListContainer/ListItem'
import ListContainer from './ListContainer/ListContainer'

class TabsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            campsites: [],

        };
    }
    componentDidMount() {
        this.getCampsites()
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    addCampsite = async (e) => {
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

            if (response.status !== 200) {
                // for http errors, Fetch doesn't reject the promise on 404 or 500
                throw Error(response.statusText);
            }

            const responseParsed = await response.json();
            // after setState render is automatically called

            this.setState({ 
                campsites: responseParsed.data 
            });

        } catch (err) {
            console.log(err);
        }
    } 
    updateCampsite = async (e) => {
        e.preventDefault();
        
        try {
        const editResponse = await fetch('http://localhost:9000/api/v1/campsites/' + this.state.campsiteToEdit.id, {
            method: 'PUT',
            body: JSON.stringify(this.state.campsiteToEdit),
            headers: {
            'Content-Type': 'application/json'
            }
        })

        const parsedResponse = await editResponse.json();
        const editedCampsites = this.state.campsite.map((campsite) => {
            if(campsite._id === this.state.campsiteToEdit.id) {
                campsite = parsedResponse.data;
            }
        return campsite
        })

        this.setState({
            campsites: editedCampsites,
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
    ///hardcoded variables/props as placeholders
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
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                            <Col sm="6">
                                <h4>List campsites here</h4>
                                <ListContainer />
                            </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Add a Campsite to Your Campsites</CardTitle>
                                <CardText></CardText>
                                <form onSubmit={this.addCampsite.bind(null, this.state)}>
                                    <label>
                                        Campsite:
                                        <input type="text" name="title" onChange={this.changedCampsite} />
                                    </label>
                                    <br/>
                                    <label>
                                        Latitude Coordinate:
                                        <input type="number" name="lat" onChange={this.changedCampsite} />
                                    </label>
                                    <br/>
                                    <label>
                                        Longitude Coordinate:
                                        <input type="number" name="lng" onChange={this.changedCampsite} />
                                    </label>
                                    <br/>
                                    <label>
                                        Notes:
                                        <input type="text" name="description" onChange={this.changedCampsite} />
                                    </label>
                                    <Button handleSubmit={this.handleSubmit}>Submit</Button>
                                </form>
                            </Card>
                        </Col>
                    </TabPane>
                    <TabPane tabId="2">
                        <row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Edit This Campsite</CardTitle>
                                    <form onSubmit={this.updateCampsite.bind(null, this.state)}>
                                        <label>
                                            Campsite:
                                            <input type="text" name="title" onChange={this.updatedCampsite} />
                                        </label>
                                        <br/>
                                        <label>
                                            Latitude Coordinate:
                                            <input type="number" name="lat" onChange={this.updatedCampsite} />
                                        </label>
                                        <br/>
                                        <label>
                                            Longitude Coordinate:
                                            <input type="number" name="lng" onChange={this.updatedCampsite} />
                                        </label>
                                        <br/>
                                        <label>
                                            Notes:
                                            <input type="text" name="description" onChange={this.updatedCampsite} />
                                        </label>
                                        <Button handleSubmit={this.handleSubmit}>Submit</Button>
                                    </form>
                            </Card>
                        </Col>
                            <Col sm="6">
                                <h4>Campsite Description</h4>
                                <p>Lorem ipsum turpis lobortis tellus adipiscing consectetur sed a ut, sodales donec aliquam aptent pulvinar senectus porttitor platea, et interdum molestie fames venenatis mi tortor per.

Nullam dolor nec duis cubilia risus rutrum convallis tortor quis, sem vestibulum adipiscing quisque tincidunt proin bibendum varius, tortor mollis donec ligula aliquam turpis rhoncus ut.

Id auctor nibh cras lobortis sociosqu pharetra donec, habitant nullam pretium faucibus elementum ut ornare, etiam integer proin fames tincidunt arcu netus dictum aliquam fringilla morbi tincidunt malesuada sodales lacus velit.</p>
                            </Col>
                            </row>

                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default TabsContainer