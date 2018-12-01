import React, { Component } from "react";
import "../App.css";

class Sidebar extends Component {
  _onClick = e => {
    let tag = e.target.id;
    /* If the tag starts with a, call the filter function.  Otherwise, toggle the marker infoBox. */
    if (tag.indexOf("a") === 0) {
      let newTag = tag.slice(1);
      this.props.myfilter(newTag);
    } else {
      this.props.handleClick(tag);
    }
  };
  /* function to toggle the sidebar */
  toggleSidenav() {
    document.body.classList.toggle("sidenav-active");
  }

  render() {
    return (
      <div>
        {/* Hamburger menu */}
        <div
          tabIndex="0"
          className="hamburger"
          id="hamburger"
          onClick={event => this.toggleSidenav(event)}
        >
          <div> </div> <div> </div> <div> </div>
        </div>
        <nav>
          <h1> My Cruise Ports </h1>
          {this.props.locations.map(location => (
            <div className="links" aria-label="list-view" key={location.day}>
              <button
                id={location.day}
                className="link-item"
                onClick={this._onClick}
              >
                Day {location.day} - {location.name}
              </button>
            </div>
          ))}
          <div className="filters">
            <button
              className="filter-button"
              id="acontinental"
              onClick={this._onClick}
              myfilter={this.props.filterLocations}
            >
              Continental US
            </button>
            <button
              className="filter-button"
              id="aeastern"
              onClick={this._onClick}
              myfilter={this.props.filterLocations}
            >
              Eastern Caribbean
            </button>
            <button
              className="filter-button"
              id="aabc"
              onClick={this._onClick}
              myfilter={this.props.filterLocations}
            >
              ABC Islands
            </button>
            <button
              className="filter-button"
              id="a"
              onClick={this._onClick}
              myfilter={this.props.filterLocations}
            >
              All Locations
            </button>
          </div>
          {!sessionStorage.getItem("weatherFlag") ? (
            <div className="disclaimer">
              Sunrise / Sunset data provided by <br />
              <a href="https://www.worldweatheronline.com">
                World Weather Online!
              </a>
            </div>
          ) : (
            <div className="disclaimer">
              Sunrise and Sunset data from{" "}
              <a href="https://www.worldweatheronline.com">
                World Weather Online
              </a>
              not available.
            </div>
          )}
        </nav>
      </div>
    );
  }
}

export default Sidebar;
