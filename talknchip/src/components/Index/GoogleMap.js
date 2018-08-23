import React, { Component } from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {
  render () {
    const MapLocation = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 13.730882, lng: 100.781345 }}
        defaultZoom={17}
      >
        <Marker position={{ lat: 13.730882, lng: 100.781345 }} />
      </GoogleMap>
    ))
    return (
      <div>
        <MapLocation
          containerElement={<div style={{ height: "300px", width: "300px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    )
  }
};
export default Map
