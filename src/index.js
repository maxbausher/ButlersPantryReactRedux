import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import HomePage from "./components/home_page";
import ProductResults from "./containers/product_results";
import EventResults from "./containers/event_results";
import ProductForm from "./containers/product_form";
import EventForm from "./containers/event_form";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <div>
        <Switch>
          <Route path="/products" component={ProductResults} />
          <Route path="/events" component={EventResults} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.querySelector(".container")
);
