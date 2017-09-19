import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { firebaseStateReducer, reactReduxFirebase } from "react-redux-firebase";
import firebaseConfig from "./firebase";

import reducers from "./reducers";

const history = createHistory();

const configureStore = () => {
  const middlewares = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  /* eslint-disable no-underscore-dangle */
  const createStoreWidthFirebase = compose(
    reactReduxFirebase(firebaseConfig, { userProfile: "users" })
  )(createStore);

  return createStoreWidthFirebase(
    combineReducers({
      ...reducers,
      firebase: firebaseStateReducer,
      router: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );
  /* eslint-enable */
};
export { configureStore, history };
