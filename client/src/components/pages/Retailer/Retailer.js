import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SummaryStats from '../../organisms/SummaryStats';
import OrderTable from '../../organisms/OrdersTable';
import RetailNav from '../../organisms/RetailNav';
import SingleProductAddModal from '../../organisms/SingleProductAddModal';

const Retailer = () => {

  return (
    <Container>
      <SingleProductAddModal />
      <Row>
        <RetailNav />
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