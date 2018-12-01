import React, { Component } from "react";
import Sidebar from "./components/Sidebar.js";
import "./App.css";
import locations from "./data/locations.json";
import weather_info from "./data/weather_mock.json";
import * as weatherAPI from "./worldWeatherOnlineAPI.js";
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
      weather: weather_info,
      allLocationWeather: [],
      gotWeather: 0
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
    let locations = this.state.allLocations.filter(location =>
      location.tags.includes(tag)
    );
    this.setState({ locations: locations, selectedFilter: tag, isOpen: false });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  alertOnError(error) {
    if (error) throw error;
  }

  /* Thank you to coach @drunkenkismet  */

  getWeatherInfo() {
    this.state.allLocations.map(location => this.callWeatherAPI(location.name));
  }

  callWeatherAPI = name => {
    weatherAPI
      .get(encodeURIComponent(name), this.alertOnError)
      .then(res => {
        this.setState({
          allLocationWeather: [...this.state.allLocationWeather, res]
        });
      })
      .catch(function(error) {
        this.setState({ gotWeather: 0 });
      });
  };

  componentDidMount() {
    this.getWeatherInfo();
    console.log(this.state);
  }

  render() {
    return (
      <article className="App" aria-labelledby="Application">
        <Sidebar
          allLocations={this.state.allLocations}
          locations={this.state.locations}
          onChildClick={this._onChildClick}
          isOpen={this.state.isOpen}
          selectedDay={this.state.selectedDay}
          selectedLocation={this.state.selectedLocation}
          myfilter={this.filterlocations}
          handleClick={this.handleClick}
          gotWeather={this.state.gotWeather}
        />
        <main className="main">
          <section id="map" aria-label="map">
            <CruiseMap
              center={this.state.center}
              zoom={this.state.zoom}
              allLocations={this.state.allLocations}
              locations={this.state.locations}
              markerCallBack={this.handleClick}
              isOpen={this.state.isOpen}
              selectedDay={this.state.selectedDay}
              selectedLocation={this.state.selectedLocation}
              allLocationWeather={this.state.allLocationWeather}
              gotWeather={this.state.gotWeather}
            />
          </section>
        </main>
      </article>
    );
  }
}

export default App;
