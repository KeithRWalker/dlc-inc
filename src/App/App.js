import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from '../components/Home/Home';
import NavTop from '../components/NavTop/NavTop';
import Footer from '../components/Footer/Footer'
import Mowing from '../components/Residential/Mowing';
import Fertilization from '../components/Residential/Fertilization';
import Other from '../components/Residential/Other';
import Commercial from '../components/Commercial/Commercial';
import MultiFamily from '../components/Commercial/MultiFamily';
import Government from '../components/Commercial/Government';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component authed={authed} {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/search', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  
  render(){ 
    return (
      <div className="App">
        <Router>
          <NavTop />

          <Switch>
          <PublicRoute path="/residential/mowing" component={Mowing} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
