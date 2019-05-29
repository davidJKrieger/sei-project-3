import React, { Component } from 'react';
import './App.css';
import PageContainer from './PageContainer/PageContainer'
import Login from './LoginComp'

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }
  login = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.logged ? 
        <div>
        <PageContainer username = { this.state.username } />
        </div>
        :
        <div className="background-div">
        <Login login = { this.login } />
        </div>
        }
      </div>
    );
  }
}

export default App;

 