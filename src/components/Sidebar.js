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
        {" "}
        {/* Hamburger menu */}{" "}
        <div
          className="hamburger"
          id="hamburger"
          onClick={event => this.toggleSidenav(event)}
        >
          <div> </div> <div> </div> <div> </div>
        </div>
        {/* Sidebar Navigation */}
        <nav>
          {this.props.locations.map(location => (
            <div className="links" key={location.day}>
              <a href="/">
                Day {location.day} - {location.name}
              </a>
            </div>
          ))}
        </nav>
      </div>
    );
  }
}

export default Sidebar;
