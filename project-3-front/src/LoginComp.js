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
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render(){
        return(
            <div class="container">
                <div>
                    <h1 id="title">Dispersed</h1>
                </div>
                <div class="row">
                    <div class="Absolute-Center is-Responsive">
                        <div id="logo-container"></div>
                        <div class="col-sm-12 col-md-10 col-md-offset-1">
                            <form onSubmit={this.handleSubmit} id="loginForm">
                                <div class="form-group input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input 
                                        class="form-control" 
                                        type="text" 
                                        name='username' 
                                        placeholder="username" 
                                    />
                                </div>
                                <div class="form-group input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <input 
                                        class="form-control" 
                                        type="password" 
                                        name='password' 
                                        placeholder="password" 
                                    />
                                </div>
                                <div class="form-group">
                                    <Button type="Submit" class="btn btn-def btn-block">Login</Button>
                                </div>   
                            </form>        
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}


export default Login;