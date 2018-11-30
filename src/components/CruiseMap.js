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
  _onChildClick = key => {
    console.log(key);
    let day = parseInt(key);
    this.props.markerCallBack(day);
  };

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
          {this.props.locations.map(location => (
            <LocationMarkerComponent
              key={location.day}
              day={location.day}
              lat={location.position.lat}
              lng={location.position.lng}
              text={location.name}
              location={location}
              classes={
                this.props.isOpen === true &&
                location.day === this.props.selectedDay
                  ? "map-icon map-icon-active fa-4x"
                  : "map-icon fa-3x"
              }
            />
          ))}

          {this.props.isOpen === true ? (
            <InfoBox
              key={-1}
              lat={this.props.selectedLocation.position.lat}
              lng={this.props.selectedLocation.position.lng}
              infoContent={
                <div className="infoBox">
                  <h2>Day {this.props.selectedLocation.day}</h2>
                  <h3>{this.props.selectedLocation.name}</h3>
                  <ul>
                    <li>
                      Arrival: {this.props.selectedLocation.hours.arrival}
                    </li>
                    <li>
                      Departure: {this.props.selectedLocation.hours.departure}
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
