import React, { Component } from "react";

import Nav from "./nav";
import "./default-layout.scss";

class DefaultLayout extends Component {
  state = {};
  constructor(props, context) {
    super(props, context);
    this.onScrollHandler = this.onScrollHandler.bind(this);
  }
  onScrollHandler(e) {
    let min_scroll = this.refs.header.clientTop + this.refs.header.clientHeight;
    if (window.screenY > min_scroll) {
      console.log(min_scroll);
    }
  }
  componentDidMount() {
    document.addEventListener("scroll", this.onScrollHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.onScrollHandler);
  }
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Nav />
        {children}
      </div>
    );
  }
}

export default DefaultLayout;
