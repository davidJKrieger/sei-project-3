import React from 'react';
import './App.css';

import Header from './Header/Header'
import MapContainer from './MapContainer/MyMapComponent';
import TabsContainer from './Tabs/TabsContainer/TabsContainer'



function App() {
  return (
    <div className="App">
      <MapContainer />
      <Header />
      <TabsContainer />
    </div>
  );
}

export default App;

//google credentials
//key=API_KEY
//AIzaSyAPGeqQzqBRr28APfVVJkoMdXIEEGHw4wg
