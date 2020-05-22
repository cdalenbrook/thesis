import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, Action } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import promise from "redux-promise";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

const middleware = applyMiddleware(promise, thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
