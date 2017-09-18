import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    isOpen: false
  };
  static PropTypes = {
    sticky: PropTypes.bool
  };
  render() {
    return (
      <div className="header-wrapper">
        <div className="header">
          <div className="logo">
            <Link to="/">Minh Đức's Blog</Link>
          </div>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts" activeClassName="active">
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" activeClassName="active">
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-cv" activeClassName="active">
                My CV
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
