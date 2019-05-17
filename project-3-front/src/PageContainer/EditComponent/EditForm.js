
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
  
    render(){
        return (
            <Card body>
                <CardTitle>Edit This Campsite</CardTitle>
                <Form onSubmit={this.props.handleSubmit}>
                    <FormGroup>
                        <Row>
                            <Input
                                type="text"
                                name="name"
                                onChange={this.props.handleChange}
                                placeholder='Name your Campsite'
                                value={this.props.campsite.name}
                            />
                        </Row>
                        <Row>
                            <Input
                                type="number"
                                name="lat"
                                onChange={this.props.handleChange}
                                placeholder={this.props.lat}
                                value={this.props.campsite.lat}
                            />
                            <Input
                                type="number"
                                name="lng"
                                onChange={this.props.handleChange}
                                value={this.props.campsite.lng}
                            />
                        </Row>
                        <Row>
                            <Input
                                type="text"
                                name="notes"
                                onChange={this.props.handleChange}
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
