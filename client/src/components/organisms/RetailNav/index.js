import React, { useContext } from 'react';
import { store } from '../../../utils/GlobalRetailerState';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const RetailNav = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return (
    <Navbar bg="light" expand="lg" className="w-100">
      <Navbar.Brand href="#home">Retail Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <h2>{globalState.inView}</h2>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Add Product" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" onClick={() => dispatch({ type: 'SHOWsProdModalinView'})}>Single Product</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" onClick={() => dispatch({ type: 'SHOWbProdModalinView'})}>Bulk Products</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Add Inventory" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Single Inventory</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Bulk Inventory</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default RetailNav;