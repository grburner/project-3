import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { StateProvider } from './utils/GlobalState';

// Pages
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
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
      <StateProvider>
        <Header />
        <Router>
          <div>
            <Switch>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
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
      </StateProvider>
    </div>
  );
}

export default App;
