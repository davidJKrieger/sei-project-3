
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

class EditForm extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            name: '',
            lat: null,
            lng: null,
            notes: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateCampsite(this.state)
    }

    render(){
        return (
            <Card body>
                <CardTitle>Edit Campsite</CardTitle>
                <Form onSubmit= { this.handleSubmit }>
                    <FormGroup>
                        <Row>
                            <Input
                                type= "text"
                                name= "name"                        
                                onChange={this.handleChange}
                            />
                        </Row>
                        <Row>
                            <Input
                                type= "number"
                                name= "lat"
                                onChange={this.handleChange}
                                
                            />
                            <Input
                                type= "number"
                                name= "lng"
                                onChange={this.handleChange}
                            />
                        </Row>
                        <Row>
                            <Input
                                type= "text"
                                name= "notes"
                                onChange={ this.handleChange }
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

export default EditForm
