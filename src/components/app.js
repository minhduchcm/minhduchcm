import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch } from "react-router-dom";

import { RouteWithLayout, DefaultLayout, FullWidthLayout } from "./layout";
import {
  AboutPage,
  PostsPage,
  ContactPage,
  WorkPage,
  CvPage,
  NotFound
} from "./pages";

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <RouteWithLayout
              path="/"
              exact
              layout={DefaultLayout}
              component={AboutPage}
            />
            <RouteWithLayout
              path="/posts"
              layout={DefaultLayout}
              component={PostsPage}
            />
            <RouteWithLayout
              path="/contact"
              layout={DefaultLayout}
              component={ContactPage}
            />
            <RouteWithLayout
              path="/work"
              layout={DefaultLayout}
              component={WorkPage}
            />
            <RouteWithLayout
              path="/my-cv"
              layout={FullWidthLayout}
              component={CvPage}
            />
            <RouteWithLayout
              path="*"
              layout={DefaultLayout}
              component={NotFound}
            />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
