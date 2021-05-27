import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Interests from './components/Interests';
import CardSearch from './components/CardSearch';

export default (

  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/interests' component={Interests} />
    <Route path='/search' component={CardSearch} />
  </Switch>
)