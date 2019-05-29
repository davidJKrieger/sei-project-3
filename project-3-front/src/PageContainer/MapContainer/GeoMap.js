import React from "react"
import MyMapComponent from "./MyMapComponent"

class GeoMap extends React.PureComponent {
    state = {
        isMarkerShown: false,
        selectedCampsite:{},
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

export default GeoMap