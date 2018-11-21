import React, { Component } from "react";
import Sidebar from "./components/Sidebar.js";
import "./App.css";
import SimpleMap from "./components/Map.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        {/* Main Page */}{" "}
        <div className="main">
          <section id="map">
            <SimpleMap />
          </section>{" "}
          />
        </div>{" "}
      </div>
    );
  }
}

export default App;
