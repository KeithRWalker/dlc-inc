import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
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

class App extends React.Component {
  
  render(){ 
    return (
      <div className="App">
        <Router>
          <NavTop />

          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/mowing" component={Mowing} />
          <Route path="/fertilization" component={Fertilization} />
          <Route path="/other" component={Other} />

          <Route path="/commercial" component={Commercial} />
          <Route path="/government" component={Government} />
          <Route path="/multifamily" component={MultiFamily} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
