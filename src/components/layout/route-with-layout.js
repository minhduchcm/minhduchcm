import React from "react";
import { Route } from "react-router";

const RouteWithLayout = ({ layout, component, ...rest }) => {
  return (
    <Route
      render={props =>
        React.createElement(
          layout,
          null,
          React.createElement(component, props)
        )}
      {...rest}
    />
  );
};

export default RouteWithLayout;
