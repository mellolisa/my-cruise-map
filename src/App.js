import React, { Component } from "react";
import Sidebar from "./components/Sidebar.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />

        {/* Main Page */}
        <div className="main">
          <section id="map">
            <h1>This is where the map will go!</h1>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
