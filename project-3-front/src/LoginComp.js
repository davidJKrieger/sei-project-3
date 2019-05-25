import React, { Component } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username);
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    render(){
        return(







            <div className ="Login-component">
                <Row>   
                    <Col>
                        <div>
                            <h1>Dispersed</h1>
                            <p>Keep track of your favorite dispersed campsites</p>
                            <p>Stash the location in a database so you can remember exactly where it is and what you loved about it.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>Log In Here</CardTitle>
                                <CardSubtitle>Enter your username and click submit to see your campsites</CardSubtitle>
                                <Form>
                                    <Input
                                        type='text'
                                        name='username'
                                        placeholder='username'
                                    />
                                    <Input
                                        type='password'
                                        name='password'
                                        placeholder='password'
                                    />
                                    <Input
                                        type='submit'
                                        value='Submit'
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                    </Col>
                </Row>
            </div>


        )
    }
}

export default Login;