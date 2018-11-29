import React, { Component } from "react";
import "../App.css";

class Sidebar extends Component {
  /* function to toggle the sidebar */
  toggleSidenav() {
    document.body.classList.toggle("sidenav-active");
  }

  render() {
    return (
      <div>
        {/* Hamburger menu */}
        <div
          className="hamburger"
          id="hamburger"
          onClick={event => this.toggleSidenav(event)}
        >
          <div> </div> <div> </div> <div> </div>
        </div>
        <nav>
          <h1> My Cruise Ports </h1>
          {this.props.locations.map(location => (
            <div className="links" key={location.day}>
              <button className="link-item">
                Day {location.day} - {location.name}
              </button>
            </div>
          ))}
          <div className="filters">
            <button className="filter-button">Continental US</button>
            <button className="filter-button">Eastern Caribbean</button>
            <button className="filter-button">ABC Islands</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
