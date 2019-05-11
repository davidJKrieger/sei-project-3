import React from 'react';
import './App.css';

import Header from './Header/Header'
import SideBarContainer from './SideBar/SideBarContainer';
import ButtonContainer from './SideBar/ButtonContainer/ButtonContainer'
import AddButton from './SideBar/ButtonContainer/AddButton'
import EditButton from './SideBar/ButtonContainer/EditButton'
import Index from './SideBar/Index'
import DeleteButton from './SideBar/ButtonContainer/DeleteButton';
import InfoBar from './InfoBar/InfoBar'
import MapContainer from './MapContainer/MyMapComponent';

function App() {
  return (
    <div className="App">
      <MapContainer />
      <Header />
      <InfoBar />
      <SideBarContainer />
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
