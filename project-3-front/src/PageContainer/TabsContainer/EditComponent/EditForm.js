
import React from 'react'
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

const EditForm = (props) => {
  
    return(
        <Card body>
            <CardTitle>Edit This Campsite</CardTitle>
            <Form onSubmit={ props.handleSubmit }>
                <FormGroup>
                    <input
                        type="text"
                        name="name"
                        onChange={props.handleChange}
                        placeholder='Name your Campsite'
                        value = { props.campsite.name }
                    />
                    <Row>
                    <Input 
                        type = "number"
                        name = "lat" 
                        onChange = { props.handleChange }
                        placeholder = { props.lat }
                        value = { props.campsite.lat }
                    />
                    <Input 
                        type = "number"
                        name = "lng" 
                        onChange = { props.handleChange }
                        value = { props.campsite.lng }
                    />
                    </Row>
                    <Row>
                    <Input 
                        type="text" 
                        name="notes" 
                        onChange = { props.handleChange }
                    />
                    </Row>
                    <input type="submit" value="Submit" />
                </FormGroup>
            </Form>
        </Card>
    )
    
}

export default EditForm
