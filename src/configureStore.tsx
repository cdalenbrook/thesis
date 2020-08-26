import { createLogger } from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import promise from "redux-promise-middleware";
import { createFirestoreInstance } from "redux-firestore";
import rootReducer from "./reducers";
import { firebase } from "./repositories/firebase";

const logger = (createLogger as any)();

const dev = process.env.NODE_ENV === "production";
let middleware = dev
  ? applyMiddleware(promise, thunk, logger)
  : applyMiddleware(thunk);

if (dev) {
  middleware = composeWithDevTools(middleware);
}
//react-redux-firebase configuration
const rrfConfig = {};

export default () => {
  const store = createStore(rootReducer(), {}, middleware) as any;
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
  };
  return { store, rrfProps };
};
