import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import mapstyle from "../data/mapstyle.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faMapMarker);
const LocationMarkerComponent = ({ key }) => (
  <div key={key}>
    <FontAwesomeIcon className="map-icon fa-3x" icon="map-marker" />
  </div>
);
const mapOptions = {
  styles: mapstyle,
  mapTypeId: "terrain"
};

class CruiseMap extends Component {
  state = {
    locations: this.props.locations
  };

  getLocations(locations) {
    this.setState({ locations });
  }

  componentDidMount() {
    this.getLocations(this.props.locations);
  }

  render() {
    console.log(this.state.locations);
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "100vh",
          width: "100%"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDD48Kq168GX4Ok_CncdLtgIRtvFIiwle0"
          }}
          defaultCenter={{
            lat: 27.504497,
            lng: -69.825955
          }}
          defaultZoom={4.8}
          options={mapOptions}
        >
          {this.state.locations.map(location => (
            <LocationMarkerComponent
              key={location.day}
              lat={location.position.lat}
              lng={location.position.lng}
              text={location.name}
            />
          ))}
        </GoogleMapReact>
        / >
      </div>
    );
  }
}

export default CruiseMap;
