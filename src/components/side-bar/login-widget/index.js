import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, pathToJS } from "react-redux-firebase";

import LoginWidget from "./login-widget";

const mapStateToProps = state => {
  return {
    auth: pathToJS(state.firebase, "auth")
  };
};

export default compose(firebaseConnect(), connect(mapStateToProps))(
  LoginWidget
);
