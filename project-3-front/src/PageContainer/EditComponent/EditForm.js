
import React from 'react'
import {
    Card,
    Button,
    CardTitle,
    Row,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';


const EditForm = (props) => {
  
    return(
        <Card body>
            <CardTitle>Edit This Campsite</CardTitle>
            <Form onSubmit={ props.handleSubmit }>
                <FormGroup>
                    <Row>
                        <Input
                            type="text"
                            name="name"
                            onChange={props.handleChange}
                            placeholder='Name your Campsite'
                            value={props.campsite.name}
                        />
                    </Row>
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
                    <Row>
                        <input type="submit" value="Submit" />
                    </Row>
                </FormGroup>
            </Form>
        </Card>
    )
    
}

export default EditForm
