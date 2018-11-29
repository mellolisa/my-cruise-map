import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import mapstyle from "../data/mapstyle.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faMapMarker);
const LocationMarkerComponent = ({ key }) => (
  <div key={key} className="marker-text">
    <FontAwesomeIcon className="map-icon fa-3x" icon="map-marker" />
  </div>
);

const InfoBox = ({ infoContent }) => <div>{infoContent}</div>;

const mapOptions = {
  styles: mapstyle,
  mapTypeId: "terrain"
};

class CruiseMap extends Component {
  state = {
    locations: this.props.locations,
    isOpen: false,
    selectedDay: 1,
    selectedLocation: this.props.locations[0]
  };

  onGoogleApiLoaded = ({ map, maps }) => {
    this.map = map;
    this.maps = maps;
    console.log(this);
  };

  _onChildClick = key => {
    key = parseInt(key);
    if (key !== this.state.selectedDay) {
      this.selectLocation(key);
      console.log(key);
      console.log(this.state.selectedDay);
      this.setState({
        isOpen: true,
        selectedDay: key
      });
    } else {
      this.setState({ isOpen: false, selectedDay: -1 });
    }
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  selectLocation(day) {
    day = parseInt(day);
    if (day) {
      let location = this.state.locations.filter(
        location => location.day === day
      );
      console.log(this.state.locations[6].day);
      console.log(day);
      if (location.length > 0) {
        this.setState({
          selectedLocation: location[0]
        });
      }
    }
  }

  getLocations(locations) {
    this.setState({
      locations
    });
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
          onGoogleApiLoaded={this.onGoogleApiLoaded}
          defaultCenter={{
            lat: 27.504497,
            lng: -69.825955
          }}
          defaultZoom={4.8}
          options={mapOptions}
          yesIWantToUseGoogleMapApiInternals={true}
          onChildClick={this._onChildClick}
        >
          {this.state.locations.map(location => (
            <LocationMarkerComponent
              key={parseInt(location.day)}
              lat={location.position.lat}
              lng={location.position.lng}
              text={location.name}
              location={location}
            />
          ))}
          {this.state.isOpen === true ? (
            <InfoBox
              key={-1}
              onClick={() => this.handleToggleClose()}
              lat={this.state.selectedLocation.position.lat}
              lng={this.state.selectedLocation.position.lng}
              infoContent={
                <div className="info-content">
                  <h2>{this.state.selectedLocation.name}</h2>
                  <ul>
                    <li>
                      Arrival: {this.state.selectedLocation.hours.arrival}
                    </li>
                    <li>
                      Departure: {this.state.selectedLocation.hours.departure}
                    </li>
                  </ul>
                </div>
              }
            />
          ) : null}
        </GoogleMapReact>
      </div>
    );
  }
}

export default CruiseMap;
