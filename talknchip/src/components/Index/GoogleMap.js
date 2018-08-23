import React, { Component } from "react"
import styled from "styled-components"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {
  render () {
    const MapImage = styled.img`
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
      />
    ))
    return (
      <div >
        <MapLocation
          containerElement={<div style={{ height: "300px", width: "300px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        >
          <Marker title={"Hello"} />
        </MapLocation>
      </div>
    )
  }
};
export default Map
