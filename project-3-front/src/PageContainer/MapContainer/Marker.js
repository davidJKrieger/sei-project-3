import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MyMapComponent from "./MyMapComponent"


class MyFancyComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
        selectedCampsite:{}
    }

    componentDidMount() {
        this.setState({
            isMarkerShown: true,
  

        })
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({
             isMarkerShown: true,
     //       selectedCampsite: this.props.selectedCampsite
            })
    }

    render() {
        return (
            <MyMapComponent
                componentDidMount= {this.componentDidMount}
                isMarkerShown={ this.state.isMarkerShown }
                onMarkerClick={ this.handleMarkerClick }
                selectedCampsite={ this.props.selectedCampsite }
                campsites={this.props.campsites}
            />
        )
    }
}

export default MyFancyComponent