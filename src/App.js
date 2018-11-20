import React, { Component } from "react";
import "./App.css";

class App extends Component {
  /* function to toggle the sidebar */
  toggleSidenav() {
    document.body.classList.toggle("sidenav-active");
  }

  render() {
    return (
      <div className="App">
        {/* Hamburger menu */}
        <div
          className="hamburger"
          id="hamburger"
          onClick={event => this.toggleSidenav(event)}
        >
          <div> </div>
          <div> </div>
          <div> </div>
        </div>

        {/* Sidebar Navigation */}
        <nav>
          <div className="links">
            <a className="active" href="/">
              Home
            </a>
            <a href="/">Location 1</a>
          </div>
        </nav>

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
