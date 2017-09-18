import React, { Component } from "react";
import { HashRouter, Switch } from "react-router-dom";

import { RouteWithLayout, DefaultLayout, FullWidthLayout } from "./layout";
import {
  HomePage,
  Posts,
  Categories,
  About,
  Contact,
  Projects,
  MyCv,
  NotFound
} from "./pages";

export default class App extends Component {
  static propTypes = {};

  render() {
    return (
      <HashRouter>
        <Switch>
          <RouteWithLayout
            path="/"
            exact
            layout={DefaultLayout}
            component={HomePage}
          />
          <RouteWithLayout
            path="/posts"
            layout={DefaultLayout}
            component={Posts}
          />
          <RouteWithLayout
            path="/categories"
            layout={DefaultLayout}
            component={Categories}
          />
          <RouteWithLayout
            path="/about"
            layout={DefaultLayout}
            component={About}
          />
          <RouteWithLayout
            path="/contact"
            layout={DefaultLayout}
            component={Contact}
          />
          <RouteWithLayout
            path="/projects"
            layout={DefaultLayout}
            component={Projects}
          />
          <RouteWithLayout
            path="/my-cv"
            layout={FullWidthLayout}
            component={MyCv}
          />
          <RouteWithLayout
            path="*"
            layout={DefaultLayout}
            component={NotFound}
          />
        </Switch>
      </HashRouter>
    );
  }
}
