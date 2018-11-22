import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import mapstyle from "../data/mapstyle.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faMapMarker);
const LocationMarkerComponent = ({ text }) => (
  <div>
    {" "}
    <FontAwesomeIcon className="map-icon fa-3x" icon="map-marker" />
  </div>
);
const mapOptions = {
  styles: mapstyle,
  mapTypeId: "terrain"
};

class CruiseMap extends Component {
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
          defaultCenter={{ lat: 28.204497, lng: -69.825955 }}
          defaultZoom={4}
          options={mapOptions}
        >
          <LocationMarkerComponent
            lat={26.1412497}
            lng={-80.2156073}
            text={"Fort Lauderdale"}
          />
          <LocationMarkerComponent
            lat={12.509204}
            lng={-70.008631}
            text={"Oranjestad, Aruba"}
          />
          <LocationMarkerComponent
            lat={12.122422}
            lng={-68.882423}
            text={"Willemstad, Curacao"}
          />
          <LocationMarkerComponent
            lat={12.144349}
            lng={-68.265546}
            text={"Kralendijk, Bonaire"}
          />
          <LocationMarkerComponent
            lat={17.12741}
            lng={-61.846772}
            text={"St. John's Antigua"}
          />
          <LocationMarkerComponent
            lat={18.3419}
            lng={-64.930701}
            text={"Charlotte Amalie, St. Thomas"}
          />
          <LocationMarkerComponent
            lat={40.664873}
            lng={-74.072574}
            text={"Cape Liberty, New Jersey"}
          />
        </GoogleMapReact>
        />
      </div>
    );
  }
}

export default CruiseMap;
