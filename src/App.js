import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './containers/home/home';
import Dashboard from './components/dashboard/dashboard';
import Cart from "./containers/home/Cart";
import home from './containers/home/home';
import React from 'react';

const App =()=> {
  return (
   <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Cart} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
   </BrowserRouter>
  );
}

export default App;
