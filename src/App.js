import {BrowserRouter,Switch,Route} from 'react-router-dom';
import home from './containers/home/home';

const App =()=> {
  return (
   <BrowserRouter>
        <Switch>
          <Route path='/' component={home} />
        </Switch>
   </BrowserRouter>
  );
}

export default App;
