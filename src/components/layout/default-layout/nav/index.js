import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    isOpen: false
  };
  static PropTypes = {
    sticky: PropTypes.bool
  };
  render() {
    return (
      <div className="nav-wrapper">
        <section>
          <div className="nav">
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/not-found1" activeClassName="active">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/not-found2" activeClassName="active">
                  My CV
                </NavLink>
              </li>
              <li>
                <NavLink to="/not-found3" activeClassName="active">
                  Posts
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
