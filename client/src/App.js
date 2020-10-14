import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Consumer from './components/pages/Consumer/Consumer';
import Retailer from './components/pages/Retailer/Retailer';
import Product from './components/pages/Product/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/consumer">Consumer</Link>
              </li>
              <li>
                <Link to="/retailer">Retailer</Link>
              </li>
              <li>
                <Link to="/product/5656565">Product</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/consumer">
              <Consumer />
            </Route>
            <Route path="/retailer">
              <Retailer />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
