import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import mapstyle from "../data/mapstyle.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faMapMarker);
const LocationMarkerComponent = ({ day, classes }) => (
  <div className="marker-text">
    <FontAwesomeIcon className={classes} icon="map-marker" />
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
    selectedDay: this.props.selectedDay,
    selectedLocation: this.props.locations[0]
  };

  _onChildClick = key => {
    key = parseInt(key);
    if (key !== this.state.selectedDay) {
      this.selectLocation(key);
      this.setState({
        isOpen: true,
        selectedDay: key
      });
      this.toggleMapIcon();
    } else {
      this.setState({ isOpen: false, selectedDay: -1 });
    }
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  /* function to animate the markers */
  toggleMapIcon() {
    document.body.classList.toggle(".map-icon-active");
  }

  selectLocation(day) {
    day = parseInt(day);
    if (day) {
      let location = this.state.locations.filter(
        location => location.day === day
      );
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
          yesIWantToUseGoogleMapApiInternals={true}
          onChildClick={this._onChildClick}
        >
          {this.state.locations.map(location => (
            <LocationMarkerComponent
              key={location.day}
              day={location.day}
              lat={location.position.lat}
              lng={location.position.lng}
              text={location.name}
              location={location}
              classes={
                this.state.isOpen === true &&
                location.day === this.state.selectedDay
                  ? "map-icon map-icon-active fa-4x"
                  : "map-icon fa-3x"
              }
            />
          ))}

          {this.state.isOpen === true ? (
            <InfoBox
              key={-1}
              onClick={() => this.handleToggleClose()}
              lat={this.state.selectedLocation.position.lat}
              lng={this.state.selectedLocation.position.lng}
              infoContent={
                <div className="infoBox">
                  <h2>Day {this.state.selectedLocation.day}</h2>
                  <h3>{this.state.selectedLocation.name}</h3>
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
