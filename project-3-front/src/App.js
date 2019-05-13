import React from 'react';
import './App.css';

import Header from './Header/Header'
import tabsContainer from './tabs/tabsContainer';
import ButtonContainer from './tabs/ButtonContainer/ButtonContainer'
import AddButton from './tabs/ButtonContainer/AddButton'
import EditButton from './tabs/ButtonContainer/EditButton'
import Index from './tabs/Index'
import DeleteButton from './tabs/ButtonContainer/DeleteButton';
import InfoBar from './InfoBar/InfoBar'
import MapContainer from './MapContainer/MyMapComponent';

function App() {
  return (
    <div className="App">
      <MapContainer />
      <Header />
      <InfoBar />
      <tabsContainer />
      <ButtonContainer />
      <AddButton />
      <EditButton />
      <DeleteButton />
      <Index />
    </div>
  );
}

export default App;

//google credentials
//key=API_KEY
//AIzaSyAPGeqQzqBRr28APfVVJkoMdXIEEGHw4wg
