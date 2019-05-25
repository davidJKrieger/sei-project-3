
import React, { Component } from 'react'
import {
    Card,
    Col,
    Button,
    CardTitle,
    Row,
    Form,
    FormGroup,
    Input,

} from 'reactstrap';

import classnames from 'classnames';

class AddForm extends Component {
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
        this.setState({
            name: '',
            lat: null,
            lng: null,
            notes: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    render() {
        return (
            <div>
                <Col sm="6">
                    <h3>Add a Campsite</h3>
                    <Form onSubmit={this.handleSubmit}>
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
                                    type="number"
                                    name="lat"
                                    onChange={this.handleChange}
                                    placeholder='Enter the latitude coordinate'
                                />
                                <Input
                                    type="number"
                                    name="lng"
                                    onChange={this.handleChange}
                                    placeholder='Enter the longitude coordinate'
                                />
                            </Row>
                            <Row>
                                <Input
                                    type="text"
                                    name="notes"
                                    onChange={this.handleChange}
                                    placeholder='Describe the site and leave some notes here'
                                />
                            </Row>
                            <Row>
                                <input type="submit" value="Submit" />
                            </Row>
                        </FormGroup>
                    </Form>
                </Col>
           </div>
        
        )
    }
}

export default AddForm
