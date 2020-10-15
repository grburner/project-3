import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// Pages
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Consumer from './components/pages/Consumer/Consumer';
import Retailer from './components/pages/Retailer/Retailer';
import Product from './components/pages/Product/Product';

// Organisms
import Header from "./components/organisms/Header/Header"
import Footer from "./components/organisms/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <nav>

                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/signup">Sign Up</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/consumer">Consumer</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/retailer">Retailer</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/product/5656565">Product</Link>

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
      <Footer />
    </div>
  );
}

export default App;
