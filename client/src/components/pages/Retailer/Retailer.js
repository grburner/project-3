import React, { useContext } from 'react';

// UTILS
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from '../../../utils/GlobalState';

// COMPONENTS
import OrderTable from '../../organisms/OrdersTable';
import RetailNav from '../../organisms/RetailNav';
import SingleProductAddModal from '../../organisms/SingleProductAddModal';
import ProductTable from '../../organisms/ProductsTable';

// BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



const Retailer = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return (
    <Container className="retailer-container">
      <SingleProductAddModal data={globalState.state.userId}></SingleProductAddModal>
      <Row>
        <RetailNav />
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