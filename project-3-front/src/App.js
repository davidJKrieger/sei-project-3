//App.js is the parent function that returns the entire UI
import React, { Component } from 'react';
import './App.css';
import PageContainer from './PageContainer/PageContainer'
import Login from './LoginComp'
import Footer from './Footer'

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
      //classname App tells React.DOM what to render (top level index.js)
      //PageContainer is the Container component that will hold stat for most of the app

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

 