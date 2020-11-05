import React, { useContext } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from '../../../utils/GlobalState';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SummaryStats from '../../organisms/SummaryStats';
import OrderTable from '../../organisms/OrdersTable';
import RetailNav from '../../organisms/RetailNav';
import SingleProductAddModal from '../../organisms/SingleProductAddModal';
import ProductTable from '../../organisms/ProductsTable';



const Retailer = () => {
  const globalState = useContext(store)
  const { dispatch } = globalState;

  return (
    <Container>
      <SingleProductAddModal data={globalState.state.userId}></SingleProductAddModal>
      <Row>
        <RetailNav />
      </Row>
      <Row>
        {/* <SummaryStats /> */}
      </Row>
      <Row>
        <OrderTable />
      </Row>
      <Row>
        <ProductTable />
      </Row>
    </Container>
  );
};
  
export default Retailer;