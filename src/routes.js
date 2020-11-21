import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/home/home';
import Dashboard from './components/dashboard/dashboard';

const routes = () => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
   </BrowserRouter>
);

export default routes;