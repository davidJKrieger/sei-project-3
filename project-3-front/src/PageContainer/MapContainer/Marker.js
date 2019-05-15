import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MyMapComponent from "./MyMapComponent"


class MarkerComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
        this.props.highlightListItem()
    }

    render() {
        return (
            <MyMapComponent
                isMarkerShown={ this.state.isMarkerShown }
                onMarkerClick={ this.handleMarkerClick }
                selectedCampsite={ this.props.selectedCampsite }
                highlightListItem = { this.props.highlightListItem }
            />
        )
    }
}

export default MarkerComponent