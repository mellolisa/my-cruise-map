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
    locations: locations,
    selectedDay: -1
  };

  getLocations() {
    this.setState({
      locations
    });
  }

  _onChildClick = key => {
    console.log(key);
  };

  componentDidMount() {
    this.getLocations();
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          locations={this.state.locations}
          onChildClick={this._onChildClick}
        />
        <main className="main">
          <section id="map">
            <CruiseMap
              center={this.state.center}
              zoom={this.state.zoom}
              locations={this.state.locations}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
