
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

    

        return (
            <Card body>
                <CardTitle>Edit Campsite</CardTitle>
                <Form>
                    <FormGroup>
                        <Row>
                            <Input
                                type= "text"
                                name= "name"
                                value= { props.campsite.name }
                                onChange= { props.handleFormChange }
                          
                            />
                        </Row>
                        <Row>
                            <Input
                                type= "number"
                                name= "lat"
                                value= { props.campsite.lat } 
                                onChange={ props.handleFormChange }
                               
                                
                            />
                            <Input
                                type= "number"
                                name= "lng"
                                value={ props.campsite.lng }
                                onChange= { props.handleFormChange }
                              
                            />
                        </Row>
                        <Row>
                            <Input
                                type= "text"
                                name= "notes"
                                value={ props.campsite.notes } 
                                onChange= { props.handleFormChange }
                         
                            />
                        </Row>
                        <Row>
                            <Button color="primary" onClick={ props.updateCampsite }>Edit</Button>
                        </Row>
                    </FormGroup>
                </Form>
            </Card>
        )  
    
}

export default EditForm
