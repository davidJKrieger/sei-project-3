import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(

    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPGeqQzqBRr28APfVVJkoMdXIEEGHw4wg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 39.7392358, lng: -104.990251 }}
    >
        {props.campsites.map(marker => (
            <Marker
                position={{ lat: marker.lat , lng: marker.lng }}
                key={marker._id}
                name={marker.name}
                notes={marker.notes}
            />
        ))}
    </GoogleMap>
)

export default MyMapComponent
