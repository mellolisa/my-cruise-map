import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 20.351,
      lng: -70.021
    },
    zoom: 5
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDD48Kq168GX4Ok_CncdLtgIRtvFIiwle0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={20.351797} lng={-70.021139} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
