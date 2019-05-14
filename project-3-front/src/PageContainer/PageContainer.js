import React from 'react'

//Starting with "/" returns to the root directory and starts there
//Starting with "../" moves one directory backwards and starts there
//Starting with "../../" moves two directories backwards and starts there(and so on...)
//To move forward, just start with the first subdirectory and keep moving forward
import Footer from './Footer/Footer'
import TabsContainer from './TabsContainer/TabsContainer'
import Header from './Header/Header'
import MapContainer from './MapContainer/MyMapComponent'

//PageContainer is the parent element for 
//header, mapcontainer, tabs

const PageContainer = () => {

    return(
        <div>
        <MapContainer />
        <Header />
        <TabsContainer />
        </div>
    )
}

export default PageContainer

