import React from "react";
import "./two-colume-layout.scss";

const TwoColumeLayout = (Colume1, Colume2) => {
  return props => {
    return (
      <div className="two-colume-layout">
        <div className="colume-1">
          <Colume1 />
        </div>
        <div className="colume-2">
          <Colume2 />
        </div>
      </div>
    );
  };
};

export default TwoColumeLayout;
