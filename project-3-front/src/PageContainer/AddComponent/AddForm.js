
import React, { Component } from 'react'
import {
    TabContent,
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

class AddForm extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            lat: null,
            lng: null,
            notes: ''
        }
    }

    handleSubmit = (e) => {
        e.preventdefault()
        this.handleNewCampsite();
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }
    handleNewCampsite = async (e) => {

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

 
    render(){
        return(
            <Card body>
                <CardTitle>Add a Campsite</CardTitle>
                <Form onSubmit = { this.handleSubmit }>
                    <FormGroup>
                        <Row>
                            <Input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                placeholder='Name your Campsite'

                            />
                        </Row>
                        <Row>
                            <Input
                                type = "number"
                                name = "lat"
                                onChange = { this.handleChange }
                                placeholder = 'Enter the latitude coordinate'
                            
                            />
                            <Input
                                type = "number"
                                name = "lng"
                                onChange = { this.handleChange }
                                placeholder = 'Enter the longitude coordinate'
                                
                            />
                        </Row>
                        <Row>
                            <Input
                                type = "text"
                                name = "notes"
                                onChange = {this.handleChange}
                                placeholder = 'Describe the site and leave some notes here'
                            
                            />
                        </Row> 
                        <Row> 
                        <input type="submit" value="Submit" />
                        </Row>
                    </FormGroup>
                
                </Form>
            </Card>
        )
    }   
}

export default AddForm

