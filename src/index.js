import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import SigninPage from "views/SigninPage/SigninPage";
import SignupPage from "views/SignupPage/SignupPage";
import ShopPage from "views/ShopPage/ShopPage";
import UserDashboard from "views/UserDashboard/UserDashboard";
import CartPage from "views/CartPage/CartPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/signin" component={SigninPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/userdashboard" component={UserDashboard} />
      <Route path="/cart" component={CartPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
