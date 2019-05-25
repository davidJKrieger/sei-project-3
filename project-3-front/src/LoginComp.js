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
            location: '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username);
        this.getWeather()
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    getWeather = async (e) => {
        const location = this.state.location
        const apiKey = "b3441bfeb41ebdad172344c6297c52a2"
        const geoLocaKey = '58a864f15f5a4a1696cc6ecb7e1918d5'
        const geoApi = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=Rua+Cafel%C3%A2ndia%2C+${city}%C3%ADba%2C+${country}&key=${geoApiKey}&pretty=1`)
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
        const response = await api_call.json();
        console.log(response);
    }



    render(){
        return(
            <div className ="Login-component">
                <Row>   
                    <Col>
                        <div>
                            <h1 id="title">Dispersed</h1>
                            <p>Keep track of your favorite dispersed campsites</p>
                            <p>Stash the location in a database so you can remember exactly where they are and what you love about them.</p>
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
                                <CardSubtitle>Enter username and password</CardSubtitle>
                                <Form onSubmit={this.handleSubmit}>
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
                                    <CardTitle>Where do you like to camp?</CardTitle>                        
                                    <Input 
                                        type="text" 
                                        name="city" 
                                        placeholder="City"
                                    />
                                    <Input 
                                        type="text" 
                                        name="country" 
                                        placeholder="Country" 
                                    />
                                    <CardSubtitle>Click submit to see your campsites</CardSubtitle>
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