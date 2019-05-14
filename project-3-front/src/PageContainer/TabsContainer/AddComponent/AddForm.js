
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
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }
 
    render(){
        return(
            <Card body>
                <CardTitle>Add a Campsite</CardTitle>
                <Form onSubmit = { this.handleSubmit }>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            onChange = { this.handleChange } 
                            placeholder = 'Name your Campsite'
                    
                        />
                    <Row>
                        <Input
                            type = "number"
                            name = "lat"
                            onChange = { this.handleChange }
                            placeholder = 'Enter latitude coordinate'
                          
                        />
                        <Input
                            type = "number"
                            name = "lng"
                            onChange = { this.handleChange }
                            placeholder = 'Enter longitude coordinates'
                            
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
                    </FormGroup>
                    <input type="submit" value="Submit" />
                </Form>
            </Card>
        )
    }   
}

export default AddForm

