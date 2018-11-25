import React, { Component } from "react";
import Sidebar from "./components/Sidebar.js";
import "./App.css";
import locations from "./data/locations.json";
import CruiseMap from "./components/CruiseMap.js";

class App extends Component {
  state = {
    center: {
      lat: 20.351,
      lon: -70.021
    },
    zoom: 5,
    locations: locations
  };

  getLocations() {
    this.setState({ locations });
  }

  componentDidMount() {
    this.getLocations();
  }

  render() {
    return (
      <div className="App">
        <Sidebar /> {/* Main Page */}{" "}
        <main className="main">
          <section id="map">
            <CruiseMap
              center={this.state.center}
              zoom={this.state.zoom}
              locations={this.state.locations}
            />{" "}
          </section>{" "}
        </main>{" "}
      </div>
    );
  }
}

export default App;
