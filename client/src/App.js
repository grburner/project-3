import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { StateProvider } from './utils/GlobalRetailerState';

// Pages
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Consumer from './components/pages/Consumer/Consumer';
import Retailer from './components/pages/Retailer/Retailer';
import Product from './components/pages/Product/Product';

// Organisms
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import ImageUpload from './components/organisms/ImageUpload/index.js';

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/consumer">
              <Consumer />
            </Route>
            <Route path="/retailer">
              <StateProvider>
                <Retailer />
              </StateProvider>
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
