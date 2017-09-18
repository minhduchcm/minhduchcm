import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import createHistory from "history/createHashHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";

import reducers from "./reducers";

const history = createHistory();

const configureStore = () => {
  const middlewares = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  /* eslint-disable no-underscore-dangle */
  return createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );
  /* eslint-enable */
};
export { configureStore, history };
