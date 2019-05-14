//App.js is the parent function that returns the entire UI


import React from 'react';
import './App.css';
import PageContainer from './PageContainer/PageContainer'




function App() {
  return (
    //classname App tells React.DOM what to render (top level index.js)
    //PageContainer is the Container component that will hold stat for most of the app
    <div className="App">
      <PageContainer />
    </div>
  );
}

export default App;

//google credentials
//key=API_KEY
//AIzaSyAPGeqQzqBRr28APfVVJkoMdXIEEGHw4wg./PageContainer/MapContainer/MyMapComponent
