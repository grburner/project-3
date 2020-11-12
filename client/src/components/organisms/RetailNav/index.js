import React, { useContext } from 'react';

// UTILS
import { store } from '../../../utils/GlobalState';

// COMPONENTS
import Button from '../../atoms/Button/Button';

// BOOTSTRAP
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const RetailNav = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return (
    <Navbar bg="light" expand="lg" className="w-100">
      <Navbar.Brand href="#home"><h3>Retail Portal</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <h2>{globalState.inView}</h2>
          <Button onClick={() => dispatch({ type: 'SHOWsProdModalinView'})}> + Add Product</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default RetailNav;