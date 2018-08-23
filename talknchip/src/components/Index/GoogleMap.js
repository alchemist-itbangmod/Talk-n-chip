import React, { Component } from "react"
import styled from "styled-components"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {
  render () {
    const MapImage = styled.div`
      max-width: 300px;
    height: auto;
    border-radius: 2%;
    @media (max-width: 768px) {
    max-width: 150px;
    }
  `
    const MapLocation = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 13.730882, lng: 100.781345 }}
        defaultZoom={17}
      >
        <Marker title={"Hello"} position={{ lat: 13.730882, lng: 100.781345 }} />
      </GoogleMap>
    ))
    return (
      <div >
        <MapLocation
          containerElement={<div style={{ height: "300px", width: "300px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    )
  }
};
export default Map
