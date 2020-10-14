import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SummaryStats from '../../organisms/SummaryStats';
import OrderTable from '../../organisms/OrdersTable';

const Retailer = () => {

  return (
    <Container>
      <Row>
        <Navbar bg="light" variant="light" className="w-100">
          <Navbar.Brand href="#home">Retailer</Navbar.Brand>
        </Navbar>
      </Row>
      <Row>
        <SummaryStats />
      </Row>
      <Row>
        <OrderTable />
      </Row>
      <Row>
        <h1>Inventory</h1>
      </Row>
      <Row>
        <h1>Products</h1>
      </Row>
    </Container>
  );
};
  
export default Retailer;