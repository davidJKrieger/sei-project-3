
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
    constructor() {
        super()
        this.state = {
            name: '',
            lat: null,
            lng: null,
            notes: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleNewCampsite(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }
        render(){
        return (
            <Card body>
                <CardTitle>Edit This Campsite</CardTitle>
                <Form onSubmit= { this.handleSubmit }>
                    <FormGroup>
                        <Row>
                            <Input
                                name= "name"
                                onChange= { this.handleChange }
                                value= { this.state.name }
                            />
                        </Row>
                        <Row>
                            <Input
                                type= "number"
                                name= "lat"
                                onChange= { this.handleChange }
                                value= { this.state.lat}
                            />
                            <Input
                                type= "number"
                                name= "lng"
                                value= { this.state.lng }
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
