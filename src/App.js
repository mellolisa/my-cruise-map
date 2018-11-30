import React, { Component } from "react";
import Sidebar from "./components/Sidebar.js";
import "./App.css";
import locations from "./data/locations.json";
import weather_info from "./data/weather_mock.json";
import CruiseMap from "./components/CruiseMap.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      center: {
        lat: 20.351,
        lon: -70.021
      },
      zoom: 5,
      locations: locations,
      selectedDay: -1,
      filteredLocations: locations,
      selectedFilter: "",
      isOpen: false,
      selectedLocation: locations[0],
      weather: weather_info
    };
  }

  handleClick(day) {
    day = parseInt(day);

    if (day !== this.state.selectedDay) {
      this.selectLocation(day);
      this.setState({
        isOpen: true,
        selectedDay: day
      });
      console.log(this.state);
    } else {
      this.setState({ isOpen: false, selectedDay: -1 });
    }
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

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <div className="App">
        <Sidebar
          locations={this.state.locations}
          sidebarCallBack={this.handleClick}
        />
        <main className="main">
          <section id="map">
            <CruiseMap
              center={this.state.center}
              zoom={this.state.zoom}
              locations={this.state.locations}
              markerCallBack={this.handleClick}
              isOpen={this.state.isOpen}
              selectedDay={this.state.selectedDay}
              selectedLocation={this.state.selectedLocation}
              weather={this.state.weather}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
