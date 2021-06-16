import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              AF SLIIT
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <Link class="nav-link" aria-current="page" to="/">Categories</Link>
                  <Link class="nav-link" to="/add-category">Add Category</Link>
                  <Link class="nav-link" to="/add-vehicle">Add Vehicle</Link>
                  <Link class="nav-link" to="/select-category">Check Rent</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
