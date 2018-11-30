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
    this.filterlocations = this.filterlocations.bind(this);
    this.state = {
      center: {
        lat: 20.351,
        lon: -70.021
      },
      zoom: 5,
      locations: locations,
      allLocations: locations,
      selectedFilter: "",
      isOpen: false,
      selectedLocation: locations[0],
      selectedDay: -1,
      weather: weather_info
    };
  }

  handleClick(day) {
    day = parseInt(day);
    console.log("we're in here!");

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

  filterlocations = tag => {
    console.log("Here!");
    let locations = this.state.allLocations.filter(location =>
      location.tags.includes(tag)
    );
    this.setState({ locations: locations, selectedFilter: tag, isOpen: false });
    console.log(tag);
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <div className="App">
        <Sidebar
          allLocations={this.state.allLocations}
          locations={this.state.locations}
          onChildClick={this._onChildClick}
          isOpen={this.state.isOpen}
          selectedDay={this.state.selectedDay}
          selectedLocation={this.state.selectedLocation}
          myfilter={this.filterlocations}
          handleClick={this.handleClick}
        />
        <main className="main">
          <section id="map">
            <CruiseMap
              center={this.state.center}
              zoom={this.state.zoom}
              allLocations={this.state.allLocations}
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
