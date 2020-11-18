import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './containers/home/home';

const App =()=> {
  return (
   <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
   </BrowserRouter>
  );
}

export default App;
