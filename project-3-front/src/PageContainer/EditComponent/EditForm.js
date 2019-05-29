
import React from 'react'
import { Card,CardTitle,Row,Form,FormGroup,Input,} from 'reactstrap';

const EditForm = (props) => {
    return (
        <Card body className="edit-form">
            <CardTitle>Edit Campsite</CardTitle>
            <Form onSubmit={props.updateCampsite.bind(null,props.campsite)}>
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
                            type= "textarea"
                            name= "notes"
                            value={ props.campsite.notes } 
                            onChange= { props.handleFormChange }
                        />
                    </Row>
                    <Row>
                            <Input type='Submit' />
                    </Row>
                </FormGroup>
            </Form>
        </Card>
    )    
}

export default EditForm
