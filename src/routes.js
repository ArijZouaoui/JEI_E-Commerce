import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/home/home";
import Dashboard from "./components/dashboard/dashboard";
import Cart from "./components/cart/CartList";
import NavBar from "./components/navbar/navbar";
import { getUser } from "./utils/User";
import { useHistory } from "react-router-dom";
const routes = () => (
  <BrowserRouter>
    <NavBar user={getUser()} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/panier" component={Cart} />
    </Switch>
  </BrowserRouter>
);

export default routes;
